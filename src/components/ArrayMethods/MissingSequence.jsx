import React from "react";

export default function MissingSequence() {
  const arr = [11, 12, 13, 15, 16];

  const findMissing = () => {
    let commonDifference = Math.min(...arr.slice(1)?.map((n, i) => n - arr[i]));
    let missing;
    arr.map((_, i) => {
      if (i > 0 && arr[i] - arr[i - 1] !== Number(commonDifference)) {
        missing = arr[i - 1] + commonDifference;
      }
    });

    return missing;
  };
  console.log(findMissing(), "middinf");

  return <div></div>;
}
