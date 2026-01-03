import React from "react";

function MinMAx() {
  const arr = [10, 5, 20, 3, 8, 1];

  const findMinMax = (arr) => {
    let min = arr[0];
    let max = arr[0];

    for (let i = 0; i <= arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return { min, max };

   

    return sort
  };

  console.log(findMinMax(arr));
  return <div></div>;
}

export default MinMAx;
