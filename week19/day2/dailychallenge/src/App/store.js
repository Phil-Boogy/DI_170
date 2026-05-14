import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../Features/tasks/taskSlicer.js"

const store = configureStore({
    reducer: {
        planner: taskReducer
    },
});

export default store