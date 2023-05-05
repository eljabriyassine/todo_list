import React ,{useState} from "react";
import "../App.css"

const ToDoForm = (props) => {
    const [value , setValue ] = useState("")

    const handleChange = e =>{
        setValue(e.target.value)
    }
    
    const handleSubmit = e =>{
        e.preventDefault()
        if(value.length===0){
            alert('invalid task')
        }
        else{
            props.addTodo(value);
            setValue("")
        }
    }

    return(
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text" className="todo-input" placeholder="what you will do today..." onChange={handleChange}  value={value
            }/>
            <button type="submit" className="todo-btn" >Add Task</button>
        </form>
    )
};

export default ToDoForm;
