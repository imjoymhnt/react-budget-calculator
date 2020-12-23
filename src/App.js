import React, { useState } from "react";
import "./App.css";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import Alert from "./components/Alert";
import { v4 as uuid } from "uuid";

const initialExpense = [
  { id: uuid(), charge: "rent", amount: 1600 },
  { id: uuid(), charge: "milk", amount: 400 },
  { id: uuid(), charge: "creadit card bill", amount: 1200 },
];

function App() {
  const [expences, setExpences] = useState(initialExpense);
  return (
    <>
      <Alert />
      <h1>budget calculator</h1>
      <main className="App">
        <ExpenseForm />
        <ExpenseList expences={expences} />
      </main>
      <h1>
        total spwnding:{" "}
        <span className="total">
          {expences.reduce((acc, curr) => {
            return (acc += curr.amount);
          }, 0)}
        </span>
      </h1>
    </>
  );
}

export default App;
