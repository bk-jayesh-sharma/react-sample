import React, { useContext, useMemo } from 'react'
import { useSearchParams,useHistory } from 'react-router-dom';
import { TodoContext } from '../App';

export default function TodoView() {
  
  const [searchParams, setSearchParams] = useSearchParams();
  const contextData = useContext(TodoContext);


  console.log('>>',contextData,searchParams.get("id"));

  const todo = useMemo(()=>{
    return contextData.todos.find(et=>et.id == searchParams.get("id"));
  },[contextData,searchParams])

  


  return (
    <div>Title: {todo && todo.title}</div>
  )
}
