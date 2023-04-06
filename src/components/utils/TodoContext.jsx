const { createContext, useState, useEffect, useContext } = require('react');

const todosContext = createContext();
export const useTodosContext = () => useContext(todosContext);

const TodosContextState = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [overdue, setOverdue] = useState(false);
  const [marker, setMarker] = useState(false);

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    console.log('savedTodos', savedTodos);
    if (savedTodos.length > 0) setTodos(JSON.parse(savedTodos));
  }, []);

  useEffect(() => {
    if (marker) {
      const todosToLocal = JSON.stringify(todos);
      console.log('todosToLocal', todosToLocal);
      localStorage.setItem('todos', todosToLocal);
      setMarker(false);
    }
  }, [todos, marker]);

  return (
    <todosContext.Provider
      value={{
        todosArray: todos,
        isCheckedValue: isChecked,
        overdueValue: overdue,
        setTodos,
        setIsChecked,
        setOverdue,
        setMarker,
      }}
    >
      {children}
    </todosContext.Provider>
  );
};

export default TodosContextState;
