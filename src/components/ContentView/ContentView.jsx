import { useTodosContext } from 'components/utils/TodoContext';
import css from '../ListStudy/ListStudy.module.css';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
const { default: styled } = require('styled-components');

const ContentView = () => {
  const contextState = useTodosContext();
  console.log('contextState.todos', contextState.todosArray);
  const handleChange = todoId => {
    contextState.setTodos(prevTodoList => {
      return prevTodoList.map(el =>
        el.id === todoId ? { ...el, done: !el.done } : el
      );
    });
  };

  const deleteTodo = todoId => {
    contextState.setTodos(
      contextState.todosArray.filter(el => el.id !== todoId)
    );
  };
  return (
    <ContainerTodos>
      <ContainerHeader>
        <h1>Todo Table, today is {contextState.dateString}</h1>
      </ContainerHeader>
      <FutureSection>
        <h4>Future todo</h4>
        <ul>
          {contextState.futureTodos.map(todo => (
            <li key={todo.id} className={css.listStudy}>
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
          ))}
        </ul>
      </FutureSection>

      <TodaySection>
        <h4>Today todo</h4>
        <ul>
          {contextState.todayTodos.map(todo => (
            <li key={todo.id} className={css.listStudy}>
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
          ))}
        </ul>
      </TodaySection>

      <OverdueSection>
        <h4>Overdue todo</h4>
        <ul>
          {contextState.overdueTodos.map(todo => (
            <li key={todo.id} className={css.listStudy}>
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
          ))}
        </ul>
      </OverdueSection>
      <FinishedTodos>
        <h4>Finished todo</h4>
        <ul>
          {contextState.finished.map(todo => (
            <li key={todo.id} className={css.listStudy}>
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
          ))}
        </ul>
      </FinishedTodos>
    </ContainerTodos>
  );
};

const ContainerTodos = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
`;

const ContainerHeader = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
`;
const FutureSection = styled.div`
  width: calc(100% / 4);
`;
const TodaySection = styled.div`
  width: calc(100% / 4);
`;

const OverdueSection = styled.div`
  width: calc(100% / 4);
`;

const FinishedTodos = styled.div`
  width: calc(100% / 4);
`;
export default ContentView;
