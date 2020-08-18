import { reducers } from './reducers';
import { rootSaga } from './rootSaga';
import { routes } from './routes';
import { i18nConfig } from './i18n.config';

console.log('News is initialized');

export { i18nConfig, reducers as reducer, routes, rootSaga as saga };
