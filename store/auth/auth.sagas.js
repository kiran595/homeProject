import {takeLatest, call, put, all} from 'redux-saga/effects';

import * as AuthType from './auth.types';
import * as AuthActions from './auth.actions';
import {createUser} from '../../graphql/mutation';

export function* onSignupAsync({payload: {fullname, email, password}}) {
  try {
    console.log('inside of signup saga', fullname, email, password);
    console.log('after mutation hit>>');
    yield put(AuthActions.signupSuccess());
  } catch (error) {
    console.log('catched error>>', error);

    yield put(AuthActions.signupFail(error));
  }
}

export function* watchSignup() {
  yield takeLatest(AuthType.SIGN_UP_START, onSignupAsync);
}

export function* authSagas() {
  yield all([call(watchSignup)]);
}
