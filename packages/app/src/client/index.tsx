import React from 'react';

import {
  configureStore,
  createDIFactory,
  ModuleRouter,
  DIContext,
  API,
  IAPI,
  II18N,
  I18NService,
} from '@enterprise-ui/appcore';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import AppConfig from '../config';

import { usePrefersDarkMode } from './hooks/usePrefersDarkMode';
import rootReducer from './store/reducers/rootReducer';
import { GlobalStyle } from './styles/global';
import { ApiService } from './api';
import { GlobalMenu } from './components/GlobalMenu';
import { I18N_COMMON_KEY } from './consts';
import { I18N_COMMON_CONFIG } from './i18n';

const diContainer = createDIFactory();

diContainer.addSingleton<IAPI>(ApiService, API);
diContainer.addSingleton<II18N>(I18NService, I18N_COMMON_KEY, I18N_COMMON_CONFIG);

const store = configureStore(
  rootReducer,
  diContainer,
  [],
  window.__PRELOADED_STATE__
);

const AppContainer = () => {
  const prefersDarkMode = usePrefersDarkMode();

  return (
    <React.StrictMode>
      <ThemeProvider theme={{ mode: prefersDarkMode ? 'dark' : 'light' }}>
        <GlobalStyle />
        <Provider store={store}>
          <DIContext.Provider value={{ container: diContainer }}>
            <Router>
              <GlobalMenu appConfig={AppConfig} />
              <ModuleRouter appConfig={AppConfig} key="ModuleRouter" />
            </Router>
          </DIContext.Provider>
        </Provider>
      </ThemeProvider>
    </React.StrictMode>
  );
};

diContainer.preloadAll([I18N_COMMON_KEY]).then(() => {
  console.log('preloadAll.done');
  const container = document.getElementById('root');

  if (window.__SSR_DATA__?.isServerInitialRender) {
    ReactDOM.hydrate(<AppContainer />, container);
  } else {
    ReactDOM.render(<AppContainer />, container);
  }
});
