import React, { useContext, useEffect, useState } from 'react'
import { TodoContext } from '../App';

export default function Header() {
  const [title,setTitle] = useState('');
  const contextData = useContext(TodoContext);

  const handleAddTodo = ()=>{
    let todo =   {
      "userId": 1,
      "id": Date.now(),
      "title": title,
      "completed": false
    };
    contextData.dispatch({
      type:"ADD",
      todo:todo
    });
    setTitle('');
  }

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Beyond Key Todo List
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page">
                Home
              </a>
            </li>
          </ul>
          <form className="d-flex" role="title">
            <input
              className="form-control me-2"
              type="title"
              placeholder="Todo title"
              aria-label="title"
              onChange={(e)=>{setTitle(e.target.value)}}
              value={title}
            />
            <button className="btn btn-outline-success" onClick={handleAddTodo} type="button">
              Add
            </button>
          </form>
        </div>
      </div>
    </nav>
  )
}
