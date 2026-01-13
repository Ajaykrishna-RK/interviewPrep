import React from "react";

function ArraySum() {
  // const a = [1,2,3,4]
  // const b  =[4,5,6,9]

  // let output =[]

  // const sum = ()=>{
  //   output=  a.map((item,index)=>item+b[index])
  // }
  // sum()
  // console.log(output)

  for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += i;
    }
    console.log(row);
  }

    for (let i = 5; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += i;
    }
    console.log(row);
  }

  return <div></div>;
}

export default ArraySum;
