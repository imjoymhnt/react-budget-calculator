import React from "react";
import { MdCreate, MdClear } from "react-icons/md";

const ExpenseItem = ({ expence }) => {
  return (
    <li className="item">
      <div className="info">
        <span className="expense">{expence.charge}</span>
        <span className="amount">{expence.amount}</span>
      </div>
      <div>
        <button className="edit-btn" aria-label="edit button">
          <MdCreate />
        </button>
        <button className="clear-btn" aria-label="delete button">
          <MdClear />
        </button>
      </div>
    </li>
  );
};
export default ExpenseItem;
