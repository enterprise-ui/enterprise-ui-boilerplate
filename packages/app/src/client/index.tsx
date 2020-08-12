// import './i18n';

import React from 'react';

import { configureStore, createDIFactory, ModuleLoader, DIContext } from '@enterprise-ui/appcore';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import AppConfig from '../config';

import { usePrefersDarkMode } from './hooks/usePrefersDarkMode';
import rootReducer from './store/reducers/rootReducer';
import { GlobalStyle } from './styles/global';
import { ApiService } from './api';

const DIContainer = createDIFactory(ApiService);

const store = configureStore(rootReducer, DIContainer, [], window.__PRELOADED_STATE__);

const AppContainer = () => {
  const prefersDarkMode = usePrefersDarkMode();

  return (
    <React.StrictMode>
      <ThemeProvider theme={{ mode: prefersDarkMode ? 'dark' : 'light' }}>
        <GlobalStyle />
        <Provider store={store}>
          <DIContext.Provider value={{container: DIContainer}}>
            <Router>
              <Link to="/news">News</Link>
              <Link to="/films">Films</Link>
              <ModuleLoader appConfig={AppConfig} store={store} />
            </Router>
          </DIContext.Provider>
        </Provider>
      </ThemeProvider>
    </React.StrictMode>
  );
};

const container = document.getElementById('root');

if (window.__SSR_DATA__?.isServerInitialRender) {
  ReactDOM.hydrate(<AppContainer />, container);
} else {
  ReactDOM.render(<AppContainer />, container);
}
