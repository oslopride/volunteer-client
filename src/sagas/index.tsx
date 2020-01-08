import {all, call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import {CONSTANTS_RETRIEVED, LANDING_PAGE_RETRIEVED, RETRIEVE_CONSTANTS, RETRIEVE_LANDING_PAGE, HANDLE_AUTHENTICATION_CALLBACK, USER_PROFILE_LOADED} from '../actions';
// @ts-ignore
import {client, urlFor} from "../utils/sanity"
// @ts-ignore
import { handleAuthentication } from '../utils/auth0.js';

const getConstants = () => client.fetch(`*[_type=='constants'][0]`);
const getLandingPage = () => client.fetch(`*[_type=='landingPage']{..., "workItems": workItems[]->}[0]`);

export function* fetchConstants() {
    const response = yield call(getConstants);
    yield put({
        type: CONSTANTS_RETRIEVED,
        payload: {
            logo: urlFor(response.logo),
            prideName: response.prideName
        }
    });
}

export function* fetchLandingPage() {
    const response = yield call(getLandingPage);
    yield put({
        type: LANDING_PAGE_RETRIEVED,
        payload: {
            title: response.title,
            mainImage: urlFor(response.mainImage),
            mainText: response.mainText,
            workItems: response.workItems,
            belowTheFold: response.belowTheFold
        }
    });
}

export function* loadConstants() {
    yield takeEvery(RETRIEVE_CONSTANTS, fetchConstants);
}

export function* loadLandingPage() {
    yield takeEvery(RETRIEVE_LANDING_PAGE, fetchLandingPage);
}

export function* parseHash() {
    const user = yield call(handleAuthentication);
    yield put({ type: USER_PROFILE_LOADED, user });
}

export function* handleAuthenticationCallback() {
    yield takeLatest(HANDLE_AUTHENTICATION_CALLBACK, parseHash);
}

export default function* rootSaga() {
    yield all([loadConstants(), loadLandingPage(), handleAuthenticationCallback()]);
}