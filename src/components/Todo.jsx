import React, { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  const handleAddTodo = () => {
    setTodos((prev) => [...prev, todo]);
  };

  console.log(todos, "todos");
  return (
    <div>
      <input
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        className="border border-amber-900"
      />

      <button onClick={handleAddTodo} className="">
        Add Todo
      </button>
    </div>
  );
}

export default Todo;
