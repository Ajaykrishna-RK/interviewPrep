import React, { useState } from "react";

function Todo() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleAddTodo = () => {
    if (!input || input == "") return alert("input cant be empty");
    let newTodo = {
      todo: input,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    setInput("");
  };

  const handleEdit = (index) => {
    setEditTodo(index);
    setInput(todos[index].todo);
  };

  const handleEditTodo = () => {
    const editedTodo = todos.map((item, i) =>
      i === editTodo ? { ...item, todo: input } : item
    );
    setTodos(editedTodo);
    setEditTodo(null);
    setInput("");
  };

  const handleTodos = () => {
    if (editTodo !== null) {
      handleEditTodo();
    } else {
      handleAddTodo();
    }
  };

  return (
    <div className="justify-center items-center flex flex-col h-screen">
      <div className="">
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          value={input}
          className="border-[1px] shadow p-[10px] "
        />
        <button
          onClick={handleTodos}
          className="border-[1px] ml-4 p-[4px] cursor-pointer"
        >
          {" "}
          Submit{" "}
        </button>
      </div>
      {todos?.length > 0 && (
        <div className="mt-6 bg-[#cecbcb] rounded-[10px] p-[10px]">
          {todos?.map((item, i) => (
            <div className="flex gap-2">
              <p>
                {item?.todo},{item?.completed ? "completed" : "pending"}
              </p>
              <button
                onClick={() => handleEdit(i)}
                className="border-[1px] ml-4 p-[4px] cursor-pointer"
              >
                Edit
              </button>
              <button className="border-[1px] ml-4 p-[4px] cursor-pointer">
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Todo;
