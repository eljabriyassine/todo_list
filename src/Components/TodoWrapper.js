import React, { useState } from "react";
import ToDoForm from "./TodoForm";
import Todo from "./Todo";
const TodoWrapper = () => {
  const todoList = [
    {
      id: Math.random(),
      task: " learn react ",
      isCompleted: false,
      isEdited: false,
    },
    {
      id: Math.random(),
      task: " learn flutter ",
      isCompleted: false,
      isEdited: false,
    },
    {
      id: Math.random(),
      task: " learn redux ",
      isCompleted: false,
      isEdited: false,
    },
  ];

  const [todos, setTodos] = useState(todoList);

  const addTodo = (todo) => {
    console.log(todo);
    setTodos((prevTodos) => {
      return [
        { id: Math.random(), task: todo, isCompleted: false, isEdited: false },
        ...prevTodos,
      ];
    });
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEdited: !todo.isEdited } : todo
      )
    );
  };

  const editTask = (task,id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo,task, isEdited: !todo.isEdited } : todo
      )
    );
  };
  

  return (
    <div className="TodoWrapper">
      <h1>Get Things Done !!!</h1>
      <ToDoForm addTodo={addTodo} />
      <Todo
        todos={todos}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        editTask={editTask}
      />
    </div>
  );
};

export default TodoWrapper;
