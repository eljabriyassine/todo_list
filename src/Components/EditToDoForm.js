import React ,{useState} from "react";
import "../App.css"

const EditToDoForm = ({editTodo,task}) => {
    const [value,setValue ] = useState(task.task)

    const handleChange = (e) =>{
        // console.log(e.target.value)
        setValue(e.target.value)
    }
    
    const handleSubmit = e =>{
        e.preventDefault()
        value.length ===0  ? alert('invalid update') :  editTodo(value,task.id);
        setValue("")
    }

    return(
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text" className="todo-input" placeholder="Update task" onChange={handleChange}  value={value
            }/>
            <button type="submit" className="todo-btn" >Save...</button>
        </form>
    )
};

export default EditToDoForm;
