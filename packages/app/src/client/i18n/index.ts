import 'reflect-metadata';
import { II18n } from '@enterprise-ui/appcore';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-xhr-backend';

import { injectable } from 'inversify';

export interface I18nConfig {
  backend?: {
    loadPath: string,
  },
  contextSeparator?: string,
  debug: boolean,
  defaultNS?: 'NEWS',
  fallbackLng: string,
  interpolation: {
    escapeValue: boolean,
  },
  lng: string,
  load: 'languageOnly',
  ns?: ['NEWS'],
  react?: {
    useSuspense: boolean,
  },
}

const defaultConfig: I18nConfig = {
  load: 'languageOnly',
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  debug: true,
};

@injectable()
export class I18NService implements II18n<I18nConfig> {
  private _i18n: i18n.i18n = i18n;

  constructor() {
    this._i18n
      .use(LanguageDetector)
      .use(Backend);
  }

  t(key: string) {
    return this._i18n.t(key);
  };

  load(config: I18nConfig) {
    return this._i18n.init({...defaultConfig, ...config}, () => {
      console.log('All translations were loaded');
    });
  }

  get i18n(): i18n.i18n {
    return this._i18n;
  }
}
