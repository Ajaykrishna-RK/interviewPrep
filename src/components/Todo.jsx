import React, { useState } from "react";

function Todo() {
  const [todo, setTodo] = useState([]);
  const [data, setData] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleAdd = () => {
    if (data === "") return alert("write something");
    const newTodo = {
      completed: false,
      todo: data,
    };
    setTodo((prev) => [...prev, newTodo]);
    setData("");
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setData(todo[index]?.todo);
  };

  const editTodo = () => {
    const newTodo = todo.map((item, index) =>
      index === editIndex ? { ...item, todo: data } : item
    );
    setTodo(newTodo);
    setEditIndex(null);
    setData("");
  };

  const deleteTodo = (index) => {
    const deletedTodo = todo.filter((_, i) => i !== index);
    setTodo(deletedTodo);
  };

  const handleToggle = (index) => {
    const newTodo = todo.map((item, i) =>
      i === index ? { ...item, completed: item?.completed ? false : true } : item
    );
    setTodo(newTodo);
  };

  return (
    <div className="justify-center items-center flex flex-col">
      <div className="mt-10 shadow-lg p-[10px] flex gap-3">
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
          className="border-[1px] p-[10px] border-[#111]"
        />
        <button
          onClick={() => (editIndex !== null ? editTodo() : handleAdd())}
          className="border-[1px] px-[10px] rounded-[10px] cursor-pointer"
        >
          Add Todo
        </button>
      </div>
      {todo?.map((item, index) => (
        <div className="flex gap-3 mt-4">
          {" "}
          <p>{item?.todo}</p>{" "}
          <button
            onClick={() => handleToggle(index)}
            className="border-[1px] px-[10px] rounded-[10px] cursor-pointer"
          >
            {item?.completed ? "completed" : "not completed"}
          </button>
          <button
            onClick={() => handleEdit(index)}
            className="border-[1px] px-[10px] rounded-[10px] cursor-pointer"
          >
            Edit
          </button>{" "}
          <button
            onClick={() => deleteTodo(index)}
            className="border-[1px] px-[10px] rounded-[10px] cursor-pointer"
          >
            Delete
          </button>{" "}
        </div>
      ))}
      <div></div>
    </div>
  );
}

export default Todo;
