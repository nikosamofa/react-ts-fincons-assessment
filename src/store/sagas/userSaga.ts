import axios, { AxiosResponse } from "axios";
import { put, takeLatest, all } from "redux-saga/effects";
import { setUsersAction } from "store/reducers/userReducer";
import { USERS_FETCH_REQUEST } from "store/types";

import { User } from "types";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchUsers() {
  try {
    const response: AxiosResponse<{ value: User[] }> = yield axios.get(
      "https://services.odata.org/TripPinRESTierService/(S(hespbvdrrmhquk5vqlzcpbro))/People"
    );
    yield put(setUsersAction(response.data.value));
  } catch (e) {
    // yield put(fetchUsersErrorAction(error))
    console.error("error retrieving users data");
  }
}

export default function* userSaga() {
  yield all([takeLatest(USERS_FETCH_REQUEST, fetchUsers)]);
}
