import React from "react";

export default function MissingSequence() {
  const arr = [1, 2, 3, 5, 6];

  const findMissing = (arr) => {

    let missing

    const commDiff = Math.min(...arr.slice(1)?.map((n, i) => n - arr[i]))

    arr.map((_, i) => {
      if (i > 0 && arr[i] - arr[i - 1] !== commDiff) {
        missing = arr[i - 1] + commDiff
      }
    })


    return missing;
  };
  console.log(findMissing(arr), "middinf");

  return <div></div>;
}
