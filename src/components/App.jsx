import { nanoid } from 'nanoid';
import StudyForm from './StudyForm/StudyForm';
import { ListStudy } from './ListStudy/ListStudy';
import { useTodosContext } from './utils/TodoContext';
import ContainerTodos from './ContentView/ContentView';

const App = () => {
  const contextState = useTodosContext();

  const createTodo = (todoItem, startDate) => {
    // const dateString = startDate.toDateString();
    // console.log('APP startDate', startDate);
    const todo = {
      todo: todoItem,
      id: nanoid(),
      done: false,
      date: startDate,
      overdue: false,
    };

    contextState.setTodos([...contextState.todosArray, todo]);
    contextState.setMarker(true);
  };

  const deleteTodo = todoId => {
    // console.log(todoId);
    contextState.setTodos(contextState.todos.filter(el => el.id !== todoId));
    contextState.setMarker(true);
  };
  return (
    <>
      <StudyForm createTasks={createTodo} />
      <ContainerTodos>
        <ListStudy deleteTodo={deleteTodo} />
      </ContainerTodos>
    </>
  );
};

export default App;
