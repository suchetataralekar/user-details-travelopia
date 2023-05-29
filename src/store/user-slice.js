import { createSlice } from "@reduxjs/toolkit";
import { commonSliceActions } from "./common-slice";

const userSlice = createSlice({
    name: "user",
    initialState: {
        id: "",
        name: "",
        email: "",
        country: "",
        travellerCount: 0,
        totalBudget: 0,
    },
    reducers: {
        setUser(state, action) {
            const user = action.payload;
            return {
                ...user,
            };
        },
    },
});

export const getUser = (id) => {
    return async (dispatch) => {
        try {
            const res = await fetch(`http://localhost:8080/api/user/${id}`, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await res.json();
            dispatch(userSlice.actions.setUser(data));
        } catch (err) {
            throw new Error(err.message);
        }
    };
};

export const createUser = (user) => {
    return async (dispatch) => {
        try {
            const res = await fetch(`http://localhost:8080/api/user`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
            debugger;
            const data = await res.text();
            dispatch(userSlice.actions.setUser(user));
            dispatch(commonSliceActions.setShowUserDetails(true));
        } catch (err) {
            throw new Error(err.message);
        }
    };
};

export const userActions = userSlice.actions;

export default userSlice;
