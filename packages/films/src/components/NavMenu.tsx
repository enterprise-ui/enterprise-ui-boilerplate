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
            <a href="/films/" className="brand-logo">
              FIlms
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
                <Link to="/films/28" className="item">
                  Action
                </Link>
              </li>
              <li>
                <Link to="/films/12" className="item">
                  Adventure
                </Link>
              </li>
              <li>
                <Link to="/films/35" className="item">
                  Comedy
                </Link>
              </li>
              <li>
                <Link to="/films/80" className="item">
                  Crime
                </Link>
              </li>
              <li>
                <Link to="/films/18" className="item">
                  Drama
                </Link>
              </li>
              <li>
                <Link to="/films/27" className="item">
                  Horror
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
