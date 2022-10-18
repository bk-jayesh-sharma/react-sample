import './App.css';
import Header from './components/Header';
import TodoCardList from './components/TodoCardList';
import useAxios from './hooks/useAxios';
import { createContext, useReducer } from 'react';

export const TodoContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    case "DELETE":
      return state.filter((todo)=>todo.id !== action.id);
    case "ADD":
      return state.push({...action.todo});
    default:
      return state;
  }
};


function App() {
  const [data] = useAxios('https://jsonplaceholder.typicode.com/todos');
  const [todos, dispatch] = useReducer(reducer, data);
  return (
    <>
      <TodoContext.Provider value={{todos, dispatch}}>
        <Header/>
        <TodoCardList/>
      </TodoContext.Provider>
    </>
  );
}
 
export default App;
