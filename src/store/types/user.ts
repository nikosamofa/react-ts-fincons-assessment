import { PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types";

export interface UserState {
  users: User[] | null | undefined;
}

export const USERS_FETCH_REQUEST = "USERS_FETCH_REQUEST";
export const DEBOUNCE_USERS_FETCH_REQUEST = "DEBOUNCE_USERS_FETCH_REQUEST";
export const REMOVE_ODD_ROWS = "REMOVE_ODD_ROWS";
export const UPDATE_USER = "UPDATE_USER";

export type UsersFetchRequestAction = {
  type: typeof USERS_FETCH_REQUEST;
};

export type DebounceUsersFetchRequestAction = {
  type: typeof USERS_FETCH_REQUEST;
};

export type RemoveOddRowsAction = {
  type: typeof REMOVE_ODD_ROWS;
};

export type UpdateUserAction = {
  type: typeof UPDATE_USER;
  payload: PayloadAction<{ UserName: string; data: User }>;
};

export type UserActionTypes =
  | UsersFetchRequestAction
  | DebounceUsersFetchRequestAction
  | RemoveOddRowsAction
  | UpdateUserAction;
