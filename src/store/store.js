import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user-slice";
import commonSlice from "./common-slice";

const store = configureStore({
    reducer: { user: userSlice.reducer, common: commonSlice.reducer },
});

export default store;
