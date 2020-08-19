import ArticleListPage from './pages/ArticleListPage';
import HomePage from './pages/HomePage';
import { withNavMenu } from './components/NavMenu';

console.log('Routes is initialized');

export const routes = [
    {
        component: withNavMenu(HomePage),
        path: '/films',
        exact: true,
    },
    {
        component: withNavMenu(ArticleListPage),
        path: '/films/:id',
    },
];
