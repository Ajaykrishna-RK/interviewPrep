import React from "react";

function Duplicate() {
  const arr = [1, 2, 3, 5, 2, 4, 4, 1, 1];

  const removeDup = (arr) => {
    let freq = {}
    let result = []

    // for (let item of arr) {
    //   freq[item] = (freq[item] || 0) + 1
    // }

    // for (let key in freq) {
    //   if (freq[key] === 1) {
    //     result.push(Number(key))
    //   }
    // }

    for (let item of arr) {
      if (!freq[item]) {
        freq[item] = true
        result.push(item)
      }
    }
    return result
  }

  console.log(removeDup(arr))

  const removeDuplicate = arr.filter((item, index) => arr.indexOf(item) === index)
  // console.log(removeDuplicate, "duplicate")

  //   const  findUniqueValueds = [...new Set(arr)]

  // console.log(findUniqueValueds)

  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  console.log(sum)

  return <div></div>;
}

export default Duplicate;
