import { useDispatch } from "react-redux";
import { Button } from "./common";
import { DEBOUNCE_USERS_FETCH_REQUEST } from "../store/types";

export const RefetchButton = () => {
  const dispatch = useDispatch();

  const refetch = () => {
    dispatch({ type: DEBOUNCE_USERS_FETCH_REQUEST });
  };

  return <Button onClick={refetch}>Refetch</Button>;
};
