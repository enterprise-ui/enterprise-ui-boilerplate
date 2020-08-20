import { DI_I18N_KEY } from './consts';

export const i18nConfig = {
  backend: {
    loadPath: '/films/locales/{{lng}}/{{ns}}.json',
  },
  contextSeparator: '#',
  ns: ['FILMS'],
  defaultNS: 'FILMS',
  diI18nKey: DI_I18N_KEY,
};
