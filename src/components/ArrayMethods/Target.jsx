import React from "react";

function Target() {
  const arr = [1, 2, 4, 5, 6];

  const twoSum = (arr, target) => {
    let map = {};
    for (let i = 0; i < arr.length; i++) {
      let need = target - arr[i];

      if (!map[need]) {
        return [need, arr[i]];
      }
      map[arr[i]] = i;
    }
  };

  console.log(twoSum(arr, 11), "map");

  return <div></div>;
}

export default Target;
