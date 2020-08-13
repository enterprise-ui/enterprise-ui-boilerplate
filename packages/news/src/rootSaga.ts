import { getService, API, IAPI } from '@enterprise-ui/appcore';

import {call, put, takeEvery} from 'redux-saga/effects';

import config from '../config';

import {FETCH_ARTICLES_BEGIN, FETCH_ARTICLES_FAILURE, FETCH_ARTICLES_SUCCESS} from './consts';

export const fetchArticles = (api: IAPI) => (source: string) => {
    let url;

    if (source) {
        url = `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${config.apikey}`;
    } else {
        url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${config.apikey}`;
    }

    return api.get({url}).then((response) => response.json().then((json: any) => json));
};

function* getArticles(action: any) {
    try {
        const api: IAPI = yield getService<IAPI>(API);

        const data = yield call(fetchArticles(api), action.payload);

        yield put({type: FETCH_ARTICLES_SUCCESS, payload: data.articles});
    } catch (e) {
        console.log('errors', e);
        yield put({type: FETCH_ARTICLES_FAILURE, payload: e});
    }
}

function* rootSaga() {
    yield takeEvery(FETCH_ARTICLES_BEGIN, getArticles);
}

export {rootSaga};
