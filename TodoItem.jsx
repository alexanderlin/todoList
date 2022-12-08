import React from "react";

const TodoItem = (props)=>{
  // console.log('render this todoitem')
  return <div>
    this is a totolist item and this: {props.goal}
  </div>
}

export default TodoItem;