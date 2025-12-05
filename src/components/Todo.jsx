import React, { useEffect, useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addTodo = () => {
    let data = {
      todo: todo,
      completed: false,
    };

    setTodos((prev) => [...prev, data]);
    setTodo("");
  };

  const handleEdit = (index) => {
    const updateTodo = todos[index];

    const newTodo = {
      ...updateTodo,
      todo: "Hello",
    };
    setTodos([newTodo]);
  };

  return (
    <div>
      <input
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
        type="text"
        className="border "
      />
      <button onClick={() => addTodo()} className="">
        Add Todo
      </button>
      {todos?.map((item, index) => (
        <>
          <p>{item?.todo}</p>
          <button onClick={() => handleEdit(index)}>EditTodd</button>
        </>
      ))}
    </div>
  );
}

export default Todo;
