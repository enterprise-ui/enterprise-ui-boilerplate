import {Dispatch} from 'redux';

import {FETCH_ARTICLES_BEGIN} from '../consts';

export const fetchArticles = (genre?: string) => (dispatch: Dispatch) => {
    dispatch({
        type: FETCH_ARTICLES_BEGIN,
        payload: genre,
    });
};
