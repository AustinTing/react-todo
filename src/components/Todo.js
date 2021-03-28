import React from "react";

export default function Todo(props) {
  const name = props.name
  const isCompleted = props.isCompleted
  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input 
          id="todo-0" 
          type="checkbox" 
          defaultChecked={isCompleted} 
          onChange={() => props.toggleTaskCompleted(props.id)}
        />
        <label className="todo-label" htmlFor={props.id}>
          {name}
        </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
          Edit <span className="visually-hidden">Eat</span>
        </button>
        <button 
          type="button" 
          className="btn btn__danger"
          onClick={() => props.deleteTask(props.id)}
        >
          Delete <span className="visually-hidden">Eat</span>
        </button>
      </div>
    </li>

  );
}