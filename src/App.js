import './App.css';
import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import ToDoList from './components/ToDoList';

function App() {

  const [inputText, setInputText] = useState("");
  const [toDos, setToDos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredToDos, setFilteredToDos] = useState([]);


  // useEffects
   useEffect(() => {
    getLocalTodos();  
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [toDos, status]); 


  //filter to-dos to match their status ie: all, complete, uncomplete

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredToDos(toDos.filter((todo) => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredToDos(toDos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredToDos(toDos);
    }
  };
  

  // save locally
  
  const saveLocalTodos = () => {
      localStorage.setItem("toDos", JSON.stringify(toDos));   
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("toDos") === null ) {
      localStorage.setItem("toDos", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("toDos"));
      setToDos(todoLocal);
    }
  };

  return (
    <div className="App">
      <div className="main">
        <header>
          <h1>To-Do List</h1>      
        </header>    
        <Form 
          toDos={toDos} 
          setToDos={setToDos} 
          inputText={inputText} 
          setInputText={setInputText} 
          setStatus={setStatus}
        />
        <ToDoList 
          toDos={toDos} 
          setToDos={setToDos} 
          status={status}
          filteredToDos={filteredToDos}
        />      
      </div>
    </div>
  );
}


export default App;
