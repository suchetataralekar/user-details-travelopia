import { createSlice } from "@reduxjs/toolkit";

const commonSlice = createSlice({
    name: "common",
    initialState: {
        showUserDetails: false,
    },
    reducers: {
        setShowUserDetails(state, action) {
            return {
                showUserDetails: action.payload,
            };
        },
    },
});

export const commonSliceActions = commonSlice.actions;
export default commonSlice;
