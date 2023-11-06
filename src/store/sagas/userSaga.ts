import axios, { AxiosResponse } from "axios";
import { put, takeLatest, all, delay, call } from "redux-saga/effects";
import { setUsersAction, removeOddRowsAction, updateUserAction } from "../reducers/userReducer";
import {
  USERS_FETCH_REQUEST,
  DEBOUNCE_USERS_FETCH_REQUEST,
  REMOVE_ODD_ROWS,
  UPDATE_USER,
  UpdateUserAction,
} from "../types";

import { User } from "../../types";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUsers() {
  try {
    const response: AxiosResponse<{ value: User[] }> = yield call(
      axios.get,
      "https://services.odata.org/TripPinRESTierService/(S(hespbvdrrmhquk5vqlzcpbro))/People"
    );
    yield put(setUsersAction(response.data.value));
  } catch (e) {
    // yield put(fetchUsersErrorAction(error))
    console.error("error retrieving users data");
  }
}

function* debounceFetchUsers() {
  yield delay(500);
  yield put({ type: USERS_FETCH_REQUEST });
}

function* removeOddRows() {
  yield put(removeOddRowsAction());
}

function* updateUser(action: UpdateUserAction["payload"]) {
  yield put(updateUserAction(action.payload));
}

export default function* userSaga() {
  yield takeLatest(USERS_FETCH_REQUEST, fetchUsers);
  yield takeLatest(DEBOUNCE_USERS_FETCH_REQUEST, debounceFetchUsers);
  yield takeLatest(REMOVE_ODD_ROWS, removeOddRows);
  yield takeLatest(UPDATE_USER, updateUser);
}
