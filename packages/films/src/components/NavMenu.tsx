import React from 'react';
import { Link } from 'react-router-dom';
import { useInject, II18n, I18N } from '@enterprise-ui/appcore';
import { NAVIGATION_CONFIG } from '../consts';

const NavMenu: React.FunctionComponent = () => {
  const [i18n] = useInject<II18n<any>>(I18N);

  return (
    <div className="navbar-fixed">
      <nav className="red">
        <div className="container">
          <div className="nav-wrapper">
            <a href={NAVIGATION_CONFIG.header.link.path} className="brand-logo">
              {i18n.t(NAVIGATION_CONFIG.header.title.labelKey)}
            </a>
            <ul id="nav" className="right hide-on-med-and-down">
              {NAVIGATION_CONFIG.items.map(({path, labelKey}) => (
                <li>
                  <Link to={path} className="item">
                    {i18n.t(labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

NavMenu.displayName = 'NavMenu';

function withNavMenu<TProps = {}>(
  TargetComponent: React.ComponentType<TProps>
): React.FunctionComponent<TProps> {
  const EnhancedComponent: React.FunctionComponent<TProps> = (props) => {
    return (
      <React.Fragment>
        <NavMenu />
        <TargetComponent {...props} />
      </React.Fragment>
    );
  };

  return EnhancedComponent;
}

export { NavMenu, withNavMenu };
