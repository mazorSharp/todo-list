import React from 'react'

const Form = ({ setInputText, inputText, setToDos, toDos, setStatus }) => {
    
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        setToDos([
            ...toDos,
            { text: inputText, completed: false, id: Math.random() * 1000}
        ]);
        setInputText("");
    };

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }


    return (
        <form>
        <div className="form">
            <input 
                type="text" 
                className="todo-input"
                placeholder="enter to do item" 
                value={inputText}
                onChange={inputTextHandler}

            />
            <button onClick={submitHandler} className="todo-button" type="submit">
                <i className="fas fa-plus"></i>            
            </button>    
            <select className="todos-filter" onChange={statusHandler}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
            </select>

        </div>            
        </form>
    )
}

export default Form
