import React from 'react';
import { Link } from 'react-router-dom';
import { I18N_COMMON_KEY } from '../consts';
import { II18N, useInject, IApplicationConfig } from '@enterprise-ui/appcore';

interface IOwnProps {
  appConfig: IApplicationConfig;
}

const GlobalMenu: React.FunctionComponent<IOwnProps> = ({ appConfig }) => {
  const [i18n] = useInject<II18N>(I18N_COMMON_KEY);

  const paths = Object.keys(appConfig);

  const items = paths.map((path) => (
    <li>
      <Link to={`${path}/`} className="item">
        {i18n.t(path)}
      </Link>
    </li>
  ));

  return (
    <div className="navbar-fixed">
      <nav className="purple">
        <ul id="nav">{items}</ul>
      </nav>
    </div>
  );
};

export { GlobalMenu };
