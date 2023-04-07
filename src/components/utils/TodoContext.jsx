const { createContext, useState, useEffect, useContext } = require('react');

const todosContext = createContext();
export const useTodosContext = () => useContext(todosContext);

const TodosContextState = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [overdue, setOverdue] = useState(false);
  const [marker, setMarker] = useState(false);
  const [taskDone, setTaskDone] = useState(false);
  const [futureTodos, setFutureTodos] = useState([]);
  const [todayTodos, setTodayTodos] = useState([]);
  const [overdueTodos, setOverdueTodos] = useState([]);
  const [finished, setFinished] = useState([]);

  const currentDate = new Date();
  const dateString = currentDate.toDateString();

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    // console.log('savedTodos', savedTodos);
    if (!savedTodos) return;
    if (savedTodos.length > 0) setTodos(JSON.parse(savedTodos));
  }, []);

  useEffect(() => {
    if (marker) {
      const todosToLocal = JSON.stringify(todos);
      // console.log('todosToLocal', todosToLocal);
      localStorage.setItem('todos', todosToLocal);
      setMarker(false);
    }
  }, [todos, marker]);

  useEffect(() => {
    setFutureTodos(
      todos.filter(el => {
        return new Date(el.date) > new Date(dateString);
      })
    );
    setTodayTodos(
      todos.filter(el => {
        return new Date(el.date).getDate() === new Date(dateString).getDate();
      })
    );
    setOverdueTodos(
      todos.filter(el => {
        return new Date(el.date) < new Date(dateString);
      })
    );
    setFinished(  todos.filter(el => el.done))

  }, [dateString, todos]);

  return (
    <todosContext.Provider
      value={{
        todosArray: todos,
        finished,
        isCheckedValue: isChecked,
        overdueValue: overdue,
        done: taskDone,
        futureTodos,
        todayTodos,
        overdueTodos,
        dateString,
        setTodos,
        setIsChecked,
        setOverdue,
        setMarker,
        setTaskDone,
      }}
    >
      {children}
    </todosContext.Provider>
  );
};

export default TodosContextState;
