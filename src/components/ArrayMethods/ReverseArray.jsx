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

const reverse = (str)=>{
 let string = str.split("")
  let left =0
  let right = string.length-1
while(left<right){
  [string[left] ,string[right]] = [string[right],string[left]]
  left++
  right--
}
return string.join("")

}

  console.log(reverse(string));



  return <div></div>;
}

export default ReverseArray;
