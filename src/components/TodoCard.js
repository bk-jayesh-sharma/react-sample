import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { TodoContext } from '../App';

export default function TodoCard(props) {
  let { id, title, completed } = props;
  const contextData = useContext(TodoContext);

  const handleToggle = ()=>{
    contextData.dispatch({
      type:'TOGGLE_COMPLETE',
      id:id
    })
  };

  const handleDelete = ()=>{
    contextData.dispatch({
      type:'DELETE',
      id:id
    })
  };

  return (
    <div className="card m-3" style={{ width: "18rem" }} >
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">This task is: {completed?'Completed!':'Pending...'}</h6>
        <a onClick={handleToggle} className={"btn btn-sm mr-1 " +(completed?"btn-warning":"btn-primary")} >
          Mark {completed?'Pending':'Complete'}
        </a>
        <a onClick={handleDelete} className="btn btn-sm btn-danger">
          Delete
        </a>
      </div>
    </div>
  )
}
