import React from "react";

function Convert() {
  const input = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
  ];

  const output = input.reduce((initial, current) => {
    initial[current.id] = current.name;
    return initial;
  }, {});

  console.log(output, "otup");

  return <div></div>;
}

export default Convert;
