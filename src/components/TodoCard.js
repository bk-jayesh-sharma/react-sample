import React from 'react'

export default function TodoCard(props) {
  let { id, title, completed } = props;
  return (
    <div className="card m-3" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">This task is: {completed?'Completed!':'Pending...'}</h6>
        <a href="#" className="btn btn-sm btn-primary mr-1">
          Mark Complete
        </a>
        <a href="#" className="btn btn-sm btn-danger">
          Delete
        </a>
      </div>
    </div>
  )
}
