import { UserState } from "./user";

export * from "./user";

export type RootState = {
  user: UserState;
};
