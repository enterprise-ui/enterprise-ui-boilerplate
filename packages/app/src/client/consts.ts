export const I18N_COMMON = Symbol.for('I18N_GLOBAL_MENU');

export const I18N_CONFIG = {
  backend: {
    loadPath: '/assets/locales/{{lng}}/{{ns}}.json',
  },
  contextSeparator: '#',
  ns: ['GLOBAL_MENU'],
  debug: true,
  defaultNS: 'GLOBAL_MENU',
};
