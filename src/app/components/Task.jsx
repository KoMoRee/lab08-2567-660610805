import React from 'react'

export default function Task(props) {
    let dec = "";
    if(props.prop.isDone) dec += "text-decoration-line-through";

  return (
    <div className="d-flex p-3 gap-2 align-items-center border-bottom ">
        <span className={dec}>{props.prop.title}</span>
        <button className="btn btn-success">Done</button>
        <button className="btn btn-danger">Delete</button>
    </div>  
    )
}
