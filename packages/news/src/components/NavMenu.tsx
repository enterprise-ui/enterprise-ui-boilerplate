import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavMenu: React.FunctionComponent = () => {
  const [menuOpen, setMenuToggle] = useState(false);

  const toggleMenu = () => setMenuToggle(!menuOpen);

  const stylesOpen = {
    transform: 'translateX(0px)',
  };

  return (
    <div className="navbar-fixed">
      <nav className="red">
        <div className="container">
          <div className="nav-wrapper">
            <a href="/news" className="brand-logo">
              News
            </a>
            <a
              href="javascript:void(0)"
              onClick={toggleMenu}
              className="sidenav-trigger right"
            >
              <i className="material-icons">menu</i>
            </a>
            <div
              className="sidenav-overlay"
              style={menuOpen ? { display: 'block', opacity: 1 } : {}}
              onClick={toggleMenu}
            />
            <ul id="nav" className="right hide-on-med-and-down">
              <li>
                <Link to="/news/techradar" className="item">
                  Tech Radar
                </Link>
              </li>
              <li>
                <Link to="/news/mashable" className="item">
                  Mashable
                </Link>
              </li>
              <li>
                <Link to="/news/the-verge" className="item">
                  The Verge
                </Link>
              </li>
              <li>
                <Link to="/news/the-next-web" className="item">
                  TNW
                </Link>
              </li>
              <li>
                <Link to="/news/wired" className="item">
                  Wired
                </Link>
              </li>
              <li>
                <Link to="/news/recode" className="item">
                  Recode
                </Link>
              </li>
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
