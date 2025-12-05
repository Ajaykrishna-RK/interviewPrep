import React from "react";

function ReverseArray() {
  const arr = [1, [2, 3], [9, 4, 11, [23, [33]]], 5, 6];

  const flatten = (arr) => {
    let result = [];

    for (let item of arr) {
      if (Array.isArray(item)) {
        result.push(...flatten(item));
      } else {
        result.push(item);
      }
    }
    return result;
  };

  console.log(flatten(arr));

  return <div></div>;
}

export default ReverseArray;
