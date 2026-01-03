import React from "react";

function Duplicate() {
  const arr = [1, 2, 3, 5, 2, 4, 4, 1, 1];
  
const findDup = (arr)=>{
  let freq={}
  let result = []

  for(let item of arr){
    freq[item] = (freq[item]||0)+1
  }
  for(let key in freq) {
    if(freq[key]>1){
      result.push(Number(key))
    }
  }
  return result
} 


console.log(findDup(arr))

  return <div></div>;
}

export default Duplicate;
