import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterExpenses } from "../features/expenses/expensesSlice";
const Total = () => {
  const [category1, setCategory1] = useState("");
  const totalExp = useSelector((state) => state.expenses.TotalExp);
  const dispatch = useDispatch();
  const filterTasks = () => {
    dispatch(filterExpenses(category1));
  };
  return (
    <div className="flex justify-between items-center mt-5">
      <div>
        <select
          value={category1}
          onChange={(e) => {
            setCategory1(e.target.value);
          }}
          className="outline-none  bg-gray-300 rounded py-2 px-3"
        >
          <option value="All">All</option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="GYM">GYM</option>
          <option value="Shopping">Shopping</option>
        </select>
        <button
          onClick={filterTasks}
          className="bg-black rounded-full cursor-pointer active:scale-95 text-gray-400 font-bold py-2 px-3 ml-2"
        >
          Total
        </button>
      </div>
      <div className="flex gap-2">
        <h2 className="font-bold text-xl ">Total</h2>
        <div className="bg-gray-300 py-1 px-1  rounded flex justify-end font-semibold items-center">
          ₹ {totalExp}{" "}
        </div>
      </div>
    </div>
  );
};

export default Total;
