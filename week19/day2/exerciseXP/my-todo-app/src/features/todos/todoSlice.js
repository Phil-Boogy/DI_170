import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
    name: "todoSlicer",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.push({ task: action.payload, completed: false });
        },
        toggleTodo: (state, action) => {
            const index = state.findIndex(todo => todo.task === action.payload)
            state[index].completed = !state[index].completed;
        },
        removeTodo: (state, action) => {
            return state.filter(todo => todo.task !== action.payload)
        },
    },
});

export const { addTodo, toggleTodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;