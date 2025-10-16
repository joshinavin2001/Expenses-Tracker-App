import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteExpenses } from "../features/expenses/expensesSlice";

const Output = () => {
  const allInputs = useSelector((state) => state.expenses.tasks);
  const dispatch=useDispatch()

  return (
    <div className="mt-4">
      {allInputs.map((t) => {
        return (
          <div key={t.id} className="flex pb-2 px-1 justify-between">
            <h2 className="capitalize font-semibold break-words mt-1 w-28">
              {t.title}
            </h2>
            <h2 className="font-semibold text-start break-words mt-1 w-20">
              {t.category}
            </h2>
            <h2 className="font-semibold mt-1 ">₹ {t.amount} </h2>
              <button onClick={()=>dispatch(deleteExpenses(t.id))}
          className="bg-black rounded-full cursor-pointer active:scale-95 text-gray-400 font-bold py-1 px-3 ml-2"
        >
          Delete
        </button>
          </div>
        );
      })}
    </div>
  );
};

export default Output;
