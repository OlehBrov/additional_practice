import { useTodosContext } from 'components/utils/TodoContext';
import { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const StudyForm = ({ createTasks }) => {
  const [task, setTask] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const contextState = useTodosContext();
  const checkValueInput = e => {
    const { value } = e.target;

    setTask(value);
  };

  const onSubmit = e => {
    e.preventDefault();
    
    createTasks(task, startDate.toDateString());
    resetForm();
  };
  const resetForm = () => {
    setTask('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="task"
          id="task"
          value={task}
          onChange={checkValueInput}
        />
        <button type="submit">AddTask</button>
        <DatePicker
          dateFormat="yyyy/MM/dd"
          selected={startDate}
          onChange={date => setStartDate(date)}
          calendarStartDay={1}
        />
      </form>
    </div>
  );
};

export default StudyForm;
