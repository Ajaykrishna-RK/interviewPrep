import React, { useState } from "react";

function Sorting() {
  const [sortOrder, setSortOrder] = useState("dsc");
  const [range, setRange] = useState("");
  const users = [
    { id: 1, name: "Alice Johnson", email: "alice@example.com", age: 28 },
    { id: 2, name: "Bob Smith", email: "bob.smith@example.com", age: 34 },
    {
      id: 3,
      name: "Charlie Brown",
      email: "charlie.brown@example.com",
      age: 22,
    },
    { id: 4, name: "Diana Prince", email: "diana.p@example.com", age: 30 },
    { id: 5, name: "Ethan Williams", email: "ethan.w@example.com", age: 41 },
    { id: 6, name: "Fiona Davis", email: "fiona.davis@example.com", age: 26 },
    { id: 7, name: "George Miller", email: "george.m@example.com", age: 36 },
    { id: 8, name: "Hannah Lee", email: "hannah.lee@example.com", age: 24 },
  ];

  //   const sortedData = users?.sort((a, b) =>
  //     sortOrder === "asc" ? a.age - b.age : b.age - a.age
  //   );
  //   const sortedData = users?.sort((a, b) =>
  //     sortOrder === "asc"
  //       ? a.name.localeCompare(b.name)
  //       : b.name.localeCompare(a.name)
  //   );

  const filterRange = () => {
    switch (range) {
      case "20-30":
        return users?.filter((user) => user?.age > 20 && user.age <= 30);

      case "30-35":
        return users?.filter((user) => user?.age > 30 && user.age <= 35);
      case "35+":
        return users?.filter((user) => user?.age > 40);
      default:
        return users;
    }
  };

  const getFilteredUser = filterRange();

  return (
    <div>
      <select
        className="border rounded px-3 py-2 mb-4"
        value={range}
        onChange={(e) => setRange(e.target.value)}
      >
        <option value="">All Ages</option>
        <option value="20-30">20–30</option>
        <option value="30-35">30–35</option>
        <option value="35+">35+</option>
      </select>

      {getFilteredUser?.map((item) => (
        <p>
          {item?.name} : {item?.age}
        </p>
      ))}
    </div>
  );
}

export default Sorting;
