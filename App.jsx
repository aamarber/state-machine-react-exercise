import React from "react"
import StateMachine from "./StateMachine/StateMachine";
import './App.scss';

function App() {

    const states = [
        {name: 'A'},
        {name: 'B'},
        {name: 'C'},
        {name: 'D'},
        {name: 'E'},
    ];

  return (
    <>
        <StateMachine states={states}></StateMachine>
    </>
  )
}

export default App
