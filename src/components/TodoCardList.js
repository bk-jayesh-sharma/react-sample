import React, { useContext, useEffect } from 'react'
import TodoCard from './TodoCard'
import { TodoContext} from './../App';


export default function TodoCardList(props) {
  // let {todos} = props;
  const contextData = useContext(TodoContext);
  useEffect(()=>{
    console.log('Updated Value',contextData.todos)
  },[contextData.todos])
  return (
    <div className='row p-4'>
      {
        contextData && contextData.todos && contextData.todos.map((et,i)=><TodoCard key={'key_'+i} {...et}/>)
      }
    </div>
  )
}
