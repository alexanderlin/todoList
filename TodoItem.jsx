import React from "react";

const TodoItem = (props)=>{
  // console.log('render this todoitem')
  return <div>
    this is a totolist item and this: {props.goal} <button onClick={()=>props.delete(props.goal)} >DEL</button>
  </div>
}

export default TodoItem;