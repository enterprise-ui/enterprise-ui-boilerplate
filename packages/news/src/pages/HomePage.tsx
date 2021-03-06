import React from 'react';

import { InitialPropsDecorator } from '@enterprise-ui/appcore';
import {RouteComponentProps} from 'react-router-dom';

import {fetchArticles} from '../actions';
import ArticleDetailModal from '../components/ArticleDetailModal';
import Articles from '../components/Articles';
import {IArticle} from '../models';
import { Section } from '../components/Section';

interface IRouteProps {
    id: string;
}

interface IOwnProps {}

interface IState {
    currentArticle: IArticle | null;
    showModal: boolean;
}

type TProps = IOwnProps & RouteComponentProps<IRouteProps>;

@InitialPropsDecorator
class HomePage extends React.Component<TProps, IState> {
  static displayName = 'HomePage';
  
  static async getInitialProps({ store }: any) {
    fetchArticles()(store.dispatch);

    return {};
  }

  state = {
    currentArticle: null,
    showModal: false,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleReadArticle = (currentArticle: IArticle) => {
    this.setState({ currentArticle, showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { currentArticle, showModal } = this.state;

    return (
      <div>
        {showModal && currentArticle && (
          <ArticleDetailModal article={currentArticle as any} onClose={this.handleCloseModal} />
        )}
        <div className="row">
          <Section labelKey="Pages.HomePage.title" />
          <div className="divider" />
          <div className="section">
            <div className="row">
              <Articles onReadArticle={this.handleReadArticle} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
