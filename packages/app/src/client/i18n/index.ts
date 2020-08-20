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

export const I18N_DEFAULT_CONFIG: I18nConfig = {
  load: 'languageOnly',
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  debug: true,
};
