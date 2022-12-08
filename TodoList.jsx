import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem.jsx";

const TodoList = ()=>{
  const [inVal,setInVal] = useState('what todo?!');
  const [list,setList] = useState([]);
  useEffect(()=>{
    const getList = async ()=>{
      try{
        const listPromise = await fetch('http://localhost:3000/list/one');
        const listJson = await listPromise.json();
        setList(listJson);
        console.log(listJson);
      }catch(e){
        console.error(e);
      }
    };
    if(list.length === 0)
      getList();
  });
  const handleSubmit = (e)=>{
    
    alert(inVal);
    e.preventDefault();
  };

  const todoItems = [];
  for(let i = 0; i < list.length; ++i){
    todoItems.push(<TodoItem key = {i + list[i]} task = {list[i]} />);
  }
  return <div>
      <form onSubmit={handleSubmit}>
        <label>What todo?:<textarea value={inVal} onChange={(e)=>setInVal(e.target.value)} /></label>
        <input type="submit" value="Submit" />
      </form>
      {todoItems}
    {/* <TodoItem in = {inVal}/> */}
  </div>
}

export default TodoList;