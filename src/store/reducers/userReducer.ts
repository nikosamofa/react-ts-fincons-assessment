import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "store/types";
import { User } from "types";

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
  },
});

export const { setUsersAction } = userSlice.actions;
export default userSlice.reducer;
