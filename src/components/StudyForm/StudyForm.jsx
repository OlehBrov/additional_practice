import { useState } from 'react';


const StudyForm = ({createTasks}) => {
  const [task, setTask] = useState('');

  const checkValueInput = e => {
    const { value } = e.target;
    setTask(value);
  };

 const onSubmit = e => {
    e.preventDefault();
   createTasks(task);
         resetForm();

  };
 const resetForm = () => {
    setTask('');
  };

  return  (
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="task"
          id="task"
          value={task}
          onChange={checkValueInput}
        />
        <button type="submit">AddTask</button>
      </form>
    );
}

export default StudyForm
