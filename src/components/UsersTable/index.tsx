import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, USERS_FETCH_REQUEST } from "store/types";

export const UsersTable = () => {
  const { users } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!users) {
      dispatch({ type: USERS_FETCH_REQUEST });
    }
  }, [dispatch, users]);

  return <div>userstable</div>;
};
