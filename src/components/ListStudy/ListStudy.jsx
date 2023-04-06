import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import css from './ListStudy.module.css';
import { useTodosContext } from 'components/utils/TodoContext';

const ListItem = ({ todo }) => {
  const contextState = useTodosContext();

  const deleteTodo = todoId => {
    contextState.setTodos(
      contextState.todosArray.filter(el => el.id !== todoId)
    );
  };
  return (
    <li className={css.listStudy}>
      <p>{todo.todo}</p>
      <div>
        <button>
          <AiFillEdit />
        </button>
        <button onClick={() => deleteTodo(todo.id)}>
          <AiFillDelete />
        </button>
      </div>
    </li>
  );
};

export const ListStudy = () => {
  const contextData = useTodosContext();
  console.log('contextData', contextData);
  if (!contextData.todosArray.length) {
    return;
  }
  return (
    <ul>
      {contextData.todosArray.map(todo => {
        return <ListItem todo={todo} key={todo.id} />;
      })}
    </ul>
  );
};
