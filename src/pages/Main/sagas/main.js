import { put, takeEvery } from 'redux-saga/effects'


export function* mainAsync() {
    console.log('async action')
    yield put({ type: 'DO_SOMETHING_WITH_SAGA' })
}

export default function* mainSaga() {
    yield takeEvery('DO_SOMETHING_ASYNC', mainAsync)
}

