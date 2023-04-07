import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import css from './ListStudy.module.css';
import { useTodosContext } from 'components/utils/TodoContext';
import OverdueSection from '../ContentView/ContentView'

const ListItem = ({ todo }) => {
  const contextState = useTodosContext();

  const handleChange = (todoId) => {
    contextState.setTodos((prevTodoList) => {
			return prevTodoList.map((el) =>
				el.id === todoId ? { ...el, done: !todo.done } : el
			)
		})
	}

  const deleteTodo = todoId => {
    contextState.setTodos(
      contextState.todosArray.filter(el => el.id !== todoId)
    );
  };
  return (
    <li className={css.listStudy}>
      <p>{todo.todo}</p>
      <p>{todo.date}</p>
      <input
        id={todo.id}
        type="checkbox"
        checked={todo.done}
        onChange={e => handleChange(todo.id)}
      />
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
  if (!contextData.todosArray.length) {
    return;
  }
  return (
    <ul>
      {contextData.todosArray.map(todo => {
         return  <ListItem todo={todo} key={todo.id} />;
      })}
      
    </ul>
  );
};
