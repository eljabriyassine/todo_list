import React from "react";
import EditToDoForm from "./EditToDoForm";

const Todo = ({ todos, toggleComplete, deleteTodo, editTodo, editTask }) => {
  return (
    <div>
      {todos.length === 0  ? (<h1>add seme tasks</h1> )
       :todos.map((task, index) => {
        return task.isEdited ? (
          <EditToDoForm editTodo={editTask} task={task} key={index}/>
        ) : (
          <div className="Todo" key={index}>
            <p
              onClick={() => toggleComplete(task.id)}
              className={`${task.isCompleted ? "completed" : ""}`}
            >
              {task.task}
            </p>
            <div>
              <button onClick={() => editTodo(task.id)} className="btns">
                edit
              </button>
              <button onClick={() => deleteTodo(task.id)} className="btns">
                delete
              </button>
            </div>
          </div>
        );
      })}   
    </div>
  );
};

export default Todo;
