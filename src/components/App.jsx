import { nanoid } from 'nanoid';
import StudyForm from './StudyForm/StudyForm';
import { ListStudy } from './ListStudy/ListStudy';
import { useContext, useEffect, useState } from 'react';
import TodosContextState from './utils/TodoContext';
import { useTodosContext } from './utils/TodoContext';

const App = () => {
  const contextState = useTodosContext();

  const createTodo = todoItem => {
    const todo = {
      todo: todoItem,
      id: nanoid(),
    };

    contextState.setTodos([...contextState.todosArray, todo]);
    contextState.setMarker(true);
  };

  const deleteTodo = todoId => {
    console.log(todoId);
    contextState.setTodos(contextState.todos.filter(el => el.id !== todoId));
    contextState.setMarker(true);
  };
  return (
    <>
      <StudyForm createTasks={createTodo} />
      <ListStudy deleteTodo={deleteTodo} />
    </>
  );
};

export default App;
