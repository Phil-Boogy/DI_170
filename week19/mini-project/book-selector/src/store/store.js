import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./bookSlice.js";

const store = configureStore({
    reducer: { catalogue: bookSlice },
});

export default store