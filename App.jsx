import React from "react";
import TodoContainer from './TodoContainer.jsx';
// const fetchSomething = async(e)=>{
//   e.preventDefault();
//   console.log('clicked!')
//   try{
//     const result = await fetch('http://localhost:3000/');
//     const resultJson = await result.json();
//     console.log(resultJson);
//   }catch(err){
//     return err;
//   }
// }
const App = ()=>{
  return <TodoContainer/>
};
// const App = ()=>{
//   return <button onClick={fetchSomething}>button here</button>
// };

export default App;