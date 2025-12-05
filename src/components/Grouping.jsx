import React from "react";

function Grouping() {
  const employees = [
    { id: 1, name: "Alice Johnson", department: "engineering", salary: 70000 },
    { id: 2, name: "Bob Smith", department: "engineering", salary: 80000 },
    { id: 3, name: "Clara Lee", department: "engineering", salary: 85000 },
    { id: 4, name: "David Brown", department: "marketing", salary: 60000 },
    { id: 5, name: "Ella Green", department: "marketing", salary: 65000 },
    { id: 6, name: "Frank White", department: "marketing", salary: 72000 },
    { id: 7, name: "Grace Wilson", department: "hr", salary: 55000 },
    { id: 8, name: "Henry Adams", department: "hr", salary: 50000 },
  ];

  let groupEmployees = {};

  employees.forEach((item) => {
   let  sal = item.salary;

    if (!groupEmployees[sal]) {
      groupEmployees[sal] = [];
    }
    groupEmployees[sal].push(item);
  });

  console.log(groupEmployees, "he");
  const arr = ["a", "b", "b", "c", "c"];

// const dup = arr.filter((item,index) => arr.indexOf(item)!==index);
// const dup = arr.filter((item,index) => arr.indexOf(item)=== arr.lastIndexOf(item))

  let word = "malayalam";
  const dup = word === word.split("").reverse("").join("");

  console.log(dup, "dup");
  return (
    <div>
      {Object.entries(groupEmployees)?.map(([key, value]) => (
        <>
          <p>{key}</p>

          {value?.map((item) => (
            <p>
              {item?.name} : {item?.department}
            </p>
          ))}
        </>
      ))}
    </div>
  );
}

export default Grouping;
