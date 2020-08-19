import { getService, makePath, API, IAPI } from '@enterprise-ui/appcore';

import {call, put, takeEvery} from 'redux-saga/effects';

import config from '../config';

import {FETCH_ARTICLES_BEGIN, FETCH_ARTICLES_FAILURE, FETCH_ARTICLES_SUCCESS} from './consts';

const URL = 'https://api.themoviedb.org/3/discover/movie?api_key=:apiKey&language=en-US&sort_by=popularity.desc&page=1&with_genres=:genre'

export const fetchArticles = (api: IAPI) => (genre: string = '28') => {
    const url = makePath(URL, {apiKey: config.apikey, genre});

    return api.get({url}).then((response) => response.json().then((json: any) => json));
};

function* getArticles(action: any) {
    try {
        const api: IAPI = yield getService<IAPI>(API);

        const data = yield call(fetchArticles(api), action.payload);

        yield put({type: FETCH_ARTICLES_SUCCESS, payload: data});
    } catch (e) {
        yield put({type: FETCH_ARTICLES_FAILURE, payload: e});
    }
}

function* rootSaga() {
    yield takeEvery(FETCH_ARTICLES_BEGIN, getArticles);
}

export {rootSaga};
