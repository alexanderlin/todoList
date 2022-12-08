import React, { useState } from "react";
import TodoItem from "./TodoItem.jsx";

const TodoList = ()=>{
  const [inVal,setInVal] = useState('what todo?!');
  const handleSubmit = (e)=>{
    
    alert(inVal);
    e.preventDefault();
  };
  return <div>
      <form onSubmit={handleSubmit}>
        <label>What todo?:<textarea value={inVal} onChange={(e)=>setInVal(e.target.value)} /></label>
        <input type="submit" value="Submit" />
      </form>
    <TodoItem in = {inVal}/>
  </div>
}

export default TodoList;