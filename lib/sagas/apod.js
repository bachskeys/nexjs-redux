import { take, put, call,takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
logIn,
logInSucess,
logInFail,
} from '../reducers/apod';
import {singUpWithGoogle} from "../firebase/auth";


// Make exception for process.env
/* eslint-disable no-undef */
/* eslint-enable */

export function* fetchUser() {
  console.log('second debug')
  let user = yield call(singUpWithGoogle);
  console.log('firebase return scope',user)
  yield put(logInSucess(user));
  
}

export function* watchFetchApod() {
 yield takeLatest(logIn,fetchUser)
}
