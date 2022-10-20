import './App.css';
import Header from './components/Header';
import TodoCardList from './components/TodoCardList';
import useAxios from './hooks/useAxios';
import { createContext, useEffect, useReducer } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoView from './components/TodoView';

export const TodoContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_DATA":{
      return [...action.todos];
    }
    case "TOGGLE_COMPLETE":
      return state.map((todo) => {
        console.log(todo.id , action.id,'< Ids')
        if (todo.id === action.id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    case "DELETE":
      return [...state.filter((todo)=>todo.id !== action.id)];
    case "ADD":{
      return [{...action.todo},...state]   
    }
    default:
      return state;
  }
};


function App() {
  const [data] = useAxios('https://jsonplaceholder.typicode.com/todos');
  const [todos, dispatch] = useReducer(reducer, []);
  useEffect(()=>{
    if(data)
    dispatch({
      type:'UPDATE_DATA',
      todos:data
    })
  },[data]);

  return (
    <>
      <TodoContext.Provider value={{todos, dispatch}}>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='todo' element={<TodoView/>}></Route>
          <Route index exect element={<TodoCardList/>}></Route>
        </Routes>
      </BrowserRouter>
      </TodoContext.Provider>
    </>
  );
}
 
export default App;
