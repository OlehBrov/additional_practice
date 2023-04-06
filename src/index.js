import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import TodosContextState from 'components/utils/TodoContext';
// import { TodosProvider } from 'components/utils/TodoContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodosContextState>
    {/* <TodosProvider> */}
      <App />
      </TodosContextState>
      {/* </TodosProvider> */}
  </React.StrictMode>
);
