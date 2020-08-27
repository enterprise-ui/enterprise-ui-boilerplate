import { DI_I18N_KEY } from './consts';

export const i18nConfig = {
  backend: {
    loadPath: '/news/locales/{{lng}}/{{ns}}.json',
  },
  contextSeparator: '#',
  ns: ['NEWS'],
  defaultNS: 'NEWS',
  diI18nKey: DI_I18N_KEY,
};
