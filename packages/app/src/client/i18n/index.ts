export interface I18nConfig {
  backend?: {
    loadPath: string;
  };
  contextSeparator?: string;
  debug?: boolean;
  defaultNS?: string;
  fallbackLng?: string;
  interpolation?: {
    escapeValue: boolean;
  };
  lng?: string;
  load?: 'languageOnly';
  ns?: string[];
  react?: {
    useSuspense: boolean;
  };
}

export const I18N_COMMON_CONFIG: I18nConfig = {
  backend: {
    loadPath: '/assets/locales/{{lng}}/{{ns}}.json',
  },
  contextSeparator: '#',
  debug: true,
  defaultNS: 'GLOBAL_MENU',
  ns: ['GLOBAL_MENU'],
};
