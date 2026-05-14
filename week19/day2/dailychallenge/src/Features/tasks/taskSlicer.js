import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
    selectedDate: null
};

const taskSlice = createSlice({
    name: "taskSlicer",
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({ id: action.payload.id, name: action.payload.name, date: action.payload.date, completed: false });
        },
        completeTask: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload.id);
            task.completed = !task.completed;
        },
        editTask: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload.id);
            task.name = action.payload.name;
            task.date = action.payload.date;
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload.id)
        },
        selectByDate: (state, action) => {
            state.selectedDate = action.payload.date
        }
    },
},
);

export const { addTask, completeTask, editTask, deleteTask, selectByDate } = taskSlice.actions;
export default taskSlice.reducer;