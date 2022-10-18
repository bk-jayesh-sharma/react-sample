import React from 'react'
import TodoCard from './TodoCard'

export default function TodoCardList(props) {
  let {todos} = props;
  return (
    <div className='row p-4'>
      {
        todos && todos.map((et,i)=><TodoCard key={'key_'+i} {...et}/>)
      }
    </div>
  )
}
