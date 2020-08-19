import React from 'react';

import {IArticle} from '../models';

interface IOwnProps {
    article: IArticle;
    onClose: () => void;
}

const styleAttributes: React.CSSProperties = {
    zIndex: 1003,
    display: 'block',
    opacity: 1,
    top: 10,
    width: '95vw',
    height: '95vh',
    maxHeight: '95vh',
};

const ArticleDetailModal: React.FunctionComponent<IOwnProps> = ({article, onClose}) => (
    <React.Fragment>
        <div id="modal1" className="modal" style={styleAttributes}>
            <div className="modal-footer">
                <button type="button" onClick={onClose} className="modal-close waves-effect waves-green btn red">
                    Close
                </button>
            </div>
            <div className="modal-content">
                <h4>{article.title}</h4>
                <img className="responsive-img" src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${article.poster_path}`} alt={article.title} />
                <p>{article.overview}</p>
                <div className="divider" />
            </div>
        </div>
        <div role="presentation" onClick={onClose} className="modal-overlay" style={{zIndex: 1002, display: 'block', opacity: 0.5}} />
    </React.Fragment>
);

export default ArticleDetailModal;
