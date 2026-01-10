import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./components/Todo";
import Pagination from "./components/Pagination";
import Sorting from "./components/Sorting";
import Grouping from "./components/Grouping";
import StopWatch from "./components/StopWatch";
import Duplicate from "./components/ArrayMethods/Duplicate";
import MinMAx from "./components/ArrayMethods/MinMAx";
import ReverseArray from "./components/ArrayMethods/ReverseArray";
import Target from "./components/ArrayMethods/Target";
import MissingSequence from "./components/ArrayMethods/MissingSequence";
import RemoveFalsy from "./components/ArrayMethods/RemoveFalsy";
import Convert from "./components/object/Convert";
import ArraySum from "./components/logic/ArraySum";
import CounterApp from "./components/machineTest/CounterApp";
import Page from "./components/logic/Page";

function App() {
  return (
    <>
      {/* <Todo /> */}

      {/* <Pagination /> */}
      {/* <Sorting /> */}
      {/* <Grouping /> */}
      {/* <Duplicate/> */}
      {/* <MinMAx /> */}
      {/* <ReverseArray /> */}
      {/* <Target /> */}
      {/* <MissingSequence /> */}
      {/* <RemoveFalsy /> */}
   
      {/* <Convert /> */}
      {/* <StopWatch /> */}
      {/* <Todo /> */}
      {/* <ArraySum /> */}
      <Page />
      {/* <CounterApp/> */}
    </>
  );
}

export default App;
