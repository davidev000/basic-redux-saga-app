import { all } from "redux-saga/effects"
import mainSaga from "../pages/Main/sagas/main"


export default function* rootSaga() {
    yield all([
        mainSaga(),
    ])
}