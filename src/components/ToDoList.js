import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({ toDos, setToDos, filteredToDos }) => {
    return (
        <div className="container-div">
            {filteredToDos.map((todo) => (
                <ToDo 
                    text={todo.text} 
                    key={todo.id} 
                    setToDos={setToDos} 
                    toDos={toDos} 
                    todo={todo}                        
                /> 
            ))}            
        </div>
    );
};

export default ToDoList
