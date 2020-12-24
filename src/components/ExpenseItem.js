import React from "react";
import { MdCreate, MdClear } from "react-icons/md";

const ExpenseItem = ({ expence, handleDelete, handleEdit }) => {
  return (
    <li className="item">
      <div className="info">
        <span className="expense">{expence.charge}</span>
        <span className="amount">{expence.amount}</span>
      </div>
      <div>
        <button
          className="edit-btn"
          aria-label="edit button"
          onClick={() => handleEdit(expence.id)}
        >
          <MdCreate />
        </button>
        <button
          className="clear-btn"
          aria-label="delete button"
          onClick={() => handleDelete(expence.id)}
        >
          <MdClear />
        </button>
      </div>
    </li>
  );
};
export default ExpenseItem;
