import { call, delay, put, takeLatest } from "redux-saga/effects";
import { fetchSuccess, fetchError, setLoading } from "../reducers/main";

function* mainAsync() {
  console.log("Managing side effects...");

  yield delay(3000); // Useless, just to waste time :)

  try {
    const res = yield call(() =>
      fetch("https://jsonplaceholder.typicode.com/posts")
    );

    const response = yield res.json();

    yield put(fetchSuccess(response));
    yield put(setLoading(false));
  } catch (error) {
    yield put(fetchError(error));
    yield put(setLoading(false));
  }
}

export default function* mainSaga() {
  yield takeLatest("main/fetchData", mainAsync);
}
