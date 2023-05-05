import React, { useState, useEffect } from "react";
import ToDoForm from "./TodoForm";
import Todo from "./Todo";
const TodoWrapper = () => {
  const todoList = []

  const [todos, setTodos] = useState(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    return savedTodos || todoList; // if there are savedTodos in localStorage, use them, otherwise use the default todoList
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); // save todos to localStorage whenever it changes

  const addTodo = (todo) => {
    setTodos((prevTodos) => {
      const newTodo = {
        id: Math.random(),
        task: todo,
        isCompleted: false,
        isEdited: false,
      };
      localStorage.setItem("todos", JSON.stringify([newTodo, ...prevTodos]));
      return [newTodo, ...prevTodos];
    });
  };

  const toggleComplete = (id) => {
    setTodos((prevTodos) => {
      const newTodos = prevTodos.map((todo) => {
        if (todo.id === id) {
          const updatedTodo = { ...todo, isCompleted: !todo.isCompleted };
          localStorage.setItem(
            "todos",
            JSON.stringify(
              prevTodos.map((t) => (t.id === id ? updatedTodo : t))
            )
          );
          return updatedTodo;
        }
        return todo;
      });
      return newTodos;
    });
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => {
      const newTodos = prevTodos.filter((todo) => todo.id !== id);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  const editTodo = (id) => {
    setTodos((prevTodos) => {
      const newTodos = prevTodos.map((todo) => {
        if (todo.id === id) {
          const updatedTodo = { ...todo, isEdited: !todo.isEdited };
          localStorage.setItem(
            "todos",
            JSON.stringify(
              prevTodos.map((t) => (t.id === id ? updatedTodo : t))
            )
          );
          return updatedTodo;
        }
        return todo;
      });
      return newTodos;
    });
  };

  const editTask = (task, id) => {
    setTodos((prevTodos) => {
      const newTodos = prevTodos.map((todo) => {
        if (todo.id === id) {
          const updatedTodo = { ...todo, task, isEdited: !todo.isEdited };
          localStorage.setItem(
            "todos",
            JSON.stringify(
              prevTodos.map((t) => (t.id === id ? updatedTodo : t))
            )
          );
          return updatedTodo;
        }
        return todo;
      });
      return newTodos;
    });
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
