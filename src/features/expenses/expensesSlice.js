import { createSlice } from "@reduxjs/toolkit";
const expenseSlice = createSlice({
  name: "expenses",
  initialState: { tasks: [], allTask: [], TotalExp: 0 },
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        title: action.payload.title,
        amount: action.payload.amount,
        category: action.payload.category,
      };
      state.tasks.push(newTask);
      state.allTask.push(newTask);
    },
    filterExpenses: (state, action) => {
      if (action.payload === "All" || !action.payload) {
        state.tasks = [...state.allTask];
      } else {
        state.tasks = state.allTask.filter(
          (elem) => elem.category === action.payload
        );
      }
      const total = state.tasks.reduce(
        (acc, val) => acc + Number(val.amount),
        0
      );
      state.TotalExp = total;
    },
  },
});
export const { addTask, filterExpenses } = expenseSlice.actions;
export default expenseSlice.reducer;
