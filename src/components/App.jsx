import { nanoid } from 'nanoid';
import { StudyForm } from './StudyForm/StudyForm';
import { ListStudy } from './ListStudy/ListStudy';
import { useEffect, useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log('todos', todos);
  }, [todos]);
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos.length > 0) setTodos(JSON.parse(savedTodos));
  }, []);

  const createTodo = todoItem => {
    const todo = {
      todo: todoItem,
      id: nanoid(),
    };
    console.log('todo obj', todo);
    setTodos([...todos, todo]);
    const todosToLocal = JSON.stringify(todos);
    localStorage.setItem('todos', todosToLocal);
  };

  const deleteTodo = todoId => {
    console.log(todoId);
    setTodos(todos.filter(el => el.id !== todoId));
  };
  return (
    <>
      <StudyForm createTasks={createTodo} />
      <ListStudy todos={todos} deleteTodo={deleteTodo} />
    </>
  );
};

export default App;
