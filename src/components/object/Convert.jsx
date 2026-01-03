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
  
// let res ={}
//   input.forEach((item)=>{
//     res[item.id] = item.name
//   })

  console.log(res, "otup");

  return <div></div>;
}

export default Convert;
