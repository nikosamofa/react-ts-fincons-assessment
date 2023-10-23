import { User } from "types";

export interface UserState {
  users: User[] | null;
}

export const USERS_FETCH_REQUEST = "USERS_FETCH_REQUEST";

export type FetchUsersRequestAction = {
  type: typeof USERS_FETCH_REQUEST;
};

export type UserActionTypes = FetchUsersRequestAction;
