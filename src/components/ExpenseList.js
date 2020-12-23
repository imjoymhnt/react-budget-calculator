import React from "react";
import Item from "./ExpenseItem";
import { MdFavorite } from "react-icons/md";

const ExpenseList = ({ expences, clearList }) => {
  return (
    <>
      <ul className="list">
        {expences.map((expence) => {
          return <Item key={expence.id} expence={expence} />;
        })}
      </ul>
      {expences.length > 0 && (
        <button className="btn" onClick={clearList}>
          clear list
          <MdFavorite className="btn-icon" />
        </button>
      )}
    </>
  );
};

export default ExpenseList;
