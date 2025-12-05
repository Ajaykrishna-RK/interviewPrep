import React from "react";

export default function RemoveFalsy() {
  //   const arr = [0, "a", false, 2, "", 3, null, undefined, NaN];
  //   const removeFalsy = (arr) => arr.filter(Boolean);

  //   const removeFalsy = (arr) => {
  //     let falsy = [];
  //     for (let i = 0; i < arr.length; i++) {
  //       if (arr[i] ) {
  //         falsy.push(arr[i]);
  //       }
  //     }
  //     return falsy;
  //   };

  const arr = [11, 12, 13, 15, 16];
  const odd = arr.filter((item) => item % 2 !== 0);
  console.log(odd, "s");

  return <div></div>;
}
