import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../features/expenses/expensesSlice";

const Input = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if(title.trim()===""||amount.trim()===""||category===""){
      alert("Please Fill All Details...? ")
      return;
    }
      const numAmount = Number(amount);
    if (isNaN(numAmount) || numAmount <= 0) {
      alert("Please Enter a Valid Number in Amount...?");
      return;
    }
    dispatch(addTask({ title, amount, category }));
    setAmount("");
    setTitle("");
    setCategory("");
  };

  return (
    <div className="text-center">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="py-2 px-3 w-60 mb-2 sm:w-55 sm:mb-0 bg-gray-300 mr-2 outline-none rounded"
          type="text"
          placeholder="Enter Title ..?"
        />
        <input 
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          className="py-2 px-3 w-60 mb-2 sm:w-55 sm:mb-0 bg-gray-300 mr-2 outline-none rounded"
          type=" text"
          placeholder="Enter Amount ..?"
        />
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          className="outline-none  bg-gray-300 rounded py-2 px-3"
        >
          <option value="" disabled>
            Select Category
          </option>
          <option value="Food">Food</option>
          <option value="Travel">Travel</option>
          <option value="GYM">GYM</option>
          <option value="Shopping">Shopping</option>
        </select>
        <button className="bg-black rounded-full cursor-pointer active:scale-95 text-gray-400 sm:mt-2 font-bold py-2 px-3 ml-2">
          Add Expenses
        </button>
      </form>
    </div>
  );
};

export default Input;
