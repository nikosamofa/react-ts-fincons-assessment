import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UpdateUserAction, UserState } from "../types";
import { User } from "../../types";

const initialState: UserState = {
  users: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsersAction: (state: UserState, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    removeOddRowsAction: (state: UserState) => {
      state.users = state.users?.filter((_, i) => i % 2 === 1);
    },
    updateUserAction: (state: UserState, action: UpdateUserAction["payload"]) => {
      if (!state.users) return;
      const idx = state.users.findIndex((user) => user.UserName === action.payload.UserName);
      if (idx < 0) return;
      state.users = [
        ...state.users.slice(0, idx),
        {
          ...state.users[idx],
          ...action.payload.data,
        },
        ...state.users.slice(idx + 1),
      ];
    },
  },
});

export const { setUsersAction, removeOddRowsAction, updateUserAction } = userSlice.actions;
export default userSlice.reducer;
