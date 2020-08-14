import 'reflect-metadata';
import { II18n } from '@enterprise-ui/appcore';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-xhr-backend';

import { injectable } from 'inversify';

export interface II18nConfig {
  defaultNS: 'NEWS';
  ns: ['NEWS'];
}

@injectable()
export class I18NService implements II18n<II18nConfig> {
  private _i18n: i18n.i18n = i18n;

  constructor() {
    this._i18n
      .use(LanguageDetector)
      .use(Backend)
      .init({
        backend: {
          loadPath: 'locales/{{lng}}/{{ns}}.json',
        },
        load: 'languageOnly',
        fallbackLng: 'ru',
        contextSeparator: '#',
        interpolation: {
          escapeValue: false,
        },
        react: {
          useSuspense: false,
        },
        debug: true,
      });
  }

  init(config: II18nConfig) {
    const { defaultNS } = config;

    this._i18n.setDefaultNamespace(defaultNS);
  }

  loadNamespaces(ns: string[]) {
    return this._i18n.loadNamespaces(ns);
  }

  get i18n(): i18n.i18n {
    return this._i18n;
  }
}
