import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem.jsx";

const TodoList = ()=>{
  const [inVal,setInVal] = useState('what todo?!');
  const [list,setList] = useState([]);
  const [user,setUser] = useState({});

  useEffect(()=>{
    const getUser = async()=>{
      try{
        const userPromise = await fetch('http://localhost:3000/users/one');
        const userObj = await userPromise.json();
        setUser(userObj);
        console.log(userObj)
      }
      catch(e){
        console.error(e);
      }
    };
    getUser();
  },[])
  useEffect(()=>{
    const getList = async ()=>{
      try{
        const listPromise = await fetch('http://localhost:3000/list/one');
        const listJson = await listPromise.json();
        // console.log(listJson, 'inside useEffect')
        setList(listJson);
        // console.log(listJson, list, 'in getList');
      }catch(e){
        console.error(e);
      }
    };
      getList();
  },[]);

  useEffect(()=>{

  },[list])


  // const handleSubmit = (e)=>{
  //   // console.log('user:  ', user);
  //   const requestOptions = {
  //     method: 'PUT',
  //     headers: { 'Content-Type': 'application/json'},
  //     body: JSON.stringify({id: user.id, goals: [...user.goals,inVal]})
  // };
  // const updateList = async()=>{
  //   try{
  //     const goalsPromise = await fetch('http://localhost:3000/list/update', requestOptions);
  //     const goalsObj = await goalsPromise.json();
  //     setUser({...user,goals: [...user.goals,inVal]});
  //     setList(goalsObj);

  //   }catch(e){
  //     console.error('failed to update list on client side in handleSubmit for entering a new todo:   ', e);
  //   }
  // };
  // e.preventDefault();
  //   updateList();
  // };

const result = [];
list.forEach((el,i)=>result.push(<TodoItem key = {i + user._id} goal = {el} />));
  // console.log('result',result)
  return (<div>
      {/* <form onSubmit={handleSubmit}> */}
      <form>
        <label>What todo?:<textarea value={inVal} onChange={(e)=>setInVal(e.target.value)} /></label>
        <input type="submit" value="Submit" />
      </form>
    {result}
  </div>)
}

export default TodoList; 

      // setTodoItems(()=>{
      //   const result = [];
      //   for(let i = 0; i < list.length; ++i){
      //     result.push(<TodoItem key = {i + list[i]} task = {list[i]} />);
      //   }
      //   console.log(result,'result')
      //   return result;
      // });
  // const handleSubmit = (e)=>{
  //   console.log('user:  ', user);
  //   const requestOptions = {
  //     method: 'PUT',
  //     headers: { 'Content-Type': 'application/json'},
  //     body: JSON.stringify({id: user.id, goals: [...user.goals,inVal]})
  // };
  // const updateList = async()=>{
  //   try{
  //     const newGoals = await fetch('http://localhost:3000/list/update', requestOptions);
  //     setUser({...user,goals: [...user.goals,inVal]});
  //   }catch(e){
  //     console.error('failed to update list on client side in handleSubmit for entering a new todo:   ', e);
  //   }
  // };
  //   updateList();
  //   e.preventDefault();
  // };
// useEffect(()=>{
  //   const getList = async ()=>{
  //     try{
  //       const listPromise = await fetch('http://localhost:3000/list/one');
  //       const listJson = await listPromise.json();
  //       // console.log(listJson)
  //       setList(listJson);
  //       console.log(listJson, list, 'in getList');
  //     }catch(e){
  //       console.error(e);
  //     }
  //   };
  //     getList();
  // },[list]);
  // const [todoItems,setTodoItems] = useState(()=>{
  //   const result = [];
  //   for(let i = 0; i < list.length; ++i){
  //     result.push(<TodoItem key = {i + list[i]} task = {list[i]} />);
  //   }
  //   console.log(result,'result')
  //   return result;
  // });