export const FETCH_ARTICLES_BEGIN = '@saga/FETCH_FILMS_BEGIN';
export const FETCH_ARTICLES_SUCCESS = '@saga/FETCH_FILMS_SUCCESS';
export const FETCH_ARTICLES_FAILURE = '@saga/FETCH_FILMS_FAILURE';

export const NAVIGATION_CONFIG = {
  header: {
    link: { path: '/films/' },
    title: { labelKey: 'Navigation.Header.title' },
  },
  items: [
    {
      path: `/films/${28}`,
      labelKey: 'Navigation.Item.Action',
    },
    {
      path: `/films/${12}`,
      labelKey: 'Navigation.Item.Adventure',
    },
    {
      path: `/films/${35}`,
      labelKey: 'Navigation.Item.Comedy',
    },
    {
      path: `/films/${80}`,
      labelKey: 'Navigation.Item.Crime',
    },
    {
      path: `/films/${18}`,
      labelKey: 'Navigation.Item.Drama',
    },
    {
      path: `/films/${27}`,
      labelKey: 'Navigation.Item.Horror',
    },
  ],
};
