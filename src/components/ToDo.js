import React, {useState} from 'react'

const ToDo = ({ text, setToDos, toDos, todo }) => {

    const [ todoEditing, setTodoEditing ] = useState(null);
    const [editingText, setEditingText ] = useState(""); 

    const deleteHandler = () => {
        setToDos(toDos.filter((element) => ( element.id !== todo.id)))
    }

    const completeHandler = () => {
        setToDos(toDos.map((element) => {
            if (todo.id === element.id) {
                return {
                    ...element, completed: !element.completed,
                };
            }
            return element;
        }))
    }
    //edit handler maybe

    function editTodo(id) {
        const updatedTodos = [...toDos].map((todo) => {
            if (todo.id === id) {
                todo.text = editingText
            }
            return todo;
        })
        setToDos(updatedTodos);
        setTodoEditing(null);
        setEditingText("");
    };


    return (
        <div className="todo">

        {todoEditing === todo.id ? (
            <input 
                type="text" 
                onChange={(e) => setEditingText(e.target.value)} 
                value={editingText} 
            />) : ("") }
            <li className={`todo-item ${todo.completed ? "completed" : "uncompleted"}`}>{ text }</li>
            <section className="all-btns">
                <button className="complete-btn" onClick={completeHandler}>
                    <i className="fas fa-check"></i>
                </button>
                <button className="trash-btn" onClick={deleteHandler}>
                    <i className="fas fa-trash"></i>
                </button>                        
                {todoEditing === todo.id ? (
                    <button className="edit-btn-active" onClick={() => editTodo(todo.id)}>
                        <i className="fas fa-edit"></i>
                    </button>
                        ) : (
                        <button className="edit-btn" onClick={(e) => setTodoEditing(todo.id)}>
                            <i className="fas fa-edit"></i>            
                        </button>)
                }                
            </section>
        </div>
    )
}

export default ToDo
