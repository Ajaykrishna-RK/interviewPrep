import React from "react";

function ReverseArray() {
  const arr = [1, [2, 3], [9, 4, 11, [23, [33]]], 5, 6];

  // const flatten = (arr) => {
  //   let result = [];

  //   for (let item of arr) {
  //     if (Array.isArray(item)) {
  //       result.push(...flatten(item));
  //     } else {
  //       result.push(item);
  //     }
  //   }
  //   return result;
  // };

  // console.log(flatten(arr));

  // const arr = [1, 2, 3, 4, 5];

  // const rev = [...arr].reverse();
  // console.log(rev);

  const string = "hello"

  // const reverse = string?.split("")?.reverse("")?.join("");
  // const reverse = (string) => {
  //   let res = []
  //   for (let i = string.length-1; i >= 0; i--) {
  //     res.push(string[i])
  //   }
  //  console.log(res)
  // }


  const reverse = (string) => {

    let arr = string
    let left = 0
    let right = arr.length - 1

    while (left < right) {
      [arr[left], arr[right]] = [arr[right], arr[left]]
      left++
      right--
    }

    return arr

  }
  
console.log(reverse([1,2,3,4,5]))
  // console.log(reverse(string));



  return <div></div>;
}

export default ReverseArray;
