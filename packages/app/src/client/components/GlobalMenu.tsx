import React from 'react';
import { Link } from 'react-router-dom';
import { I18N_GLOBAL_MENU } from '../consts';
import { II18n, useInject, IApplicationConfig } from '@enterprise-ui/appcore';
import { I18nConfig } from '../i18n';

const i18nConfig: I18nConfig = {
  backend: {
    loadPath: '/assets/locales/{{lng}}/{{ns}}.json',
  },
  contextSeparator: '#',
  ns: ['GLOBAL_MENU'],
  debug: true,
  defaultNS: 'GLOBAL_MENU',
};

interface IOwnProps {
  appConfig: IApplicationConfig;
}

const GlobalMenu: React.FunctionComponent<IOwnProps> = ({ appConfig }) => {
  const [localeLoading, setLocaleLoading] = React.useState(true);
  const [i18n] = useInject<II18n<I18nConfig>>(I18N_GLOBAL_MENU);

  const paths = Object.keys(appConfig);

  React.useEffect(() => {
    async function load() {
      await i18n.load(i18nConfig);

      setLocaleLoading(false);
    }

    load();
  });

  const items = !localeLoading
    ? paths.map((path) => (
        <li>
          <Link to={`${path}/`} className="item">
            {i18n.t(path)}
          </Link>
        </li>
      ))
    : [];

  return items.length > 0 ? (
    <div className="navbar-fixed">
      <nav className="purple">
        <ul id="nav">{items}</ul>
      </nav>
    </div>
  ) : null;
};

export { GlobalMenu };
