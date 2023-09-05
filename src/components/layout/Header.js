import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Logo from './partials/Logo';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool
}

const defaultProps = {
  navPosition: '',
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false
}

const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {

  const [isActive, setIsactive] = useState(false);

  const nav = useRef(null);
  const hamburger = useRef(null);

  useEffect(() => {
    isActive && openMenu();
    document.addEventListener('keydown', keyPress);
    document.addEventListener('click', clickOutside);
    return () => {
      document.removeEventListener('keydown', keyPress);
      document.removeEventListener('click', clickOutside);
      closeMenu();
    };
  });  

  const openMenu = () => {
    document.body.classList.add('off-nav-is-active');
    nav.current.style.maxHeight = nav.current.scrollHeight + 'px';
    setIsactive(true);
  }

  const closeMenu = () => {
    document.body.classList.remove('off-nav-is-active');
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  }

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  }

  const clickOutside = (e) => {
    if (!nav.current) return
    if (!isActive || nav.current.contains(e.target) || e.target === hamburger.current) return;
    closeMenu();
  }  

  const classes = classNames(
    'site-header',
    bottomOuterDivider && 'has-bottom-divider',
    className
  );

  return (
    <header
      {...props}
      className={classes}
    >
      <div className="container">
        <div className={
          classNames(
            'site-header-inner',
            bottomDivider && 'has-bottom-divider'
          )}>
        
              <Logo />
          {!hideNav &&
            <>
              <button
                ref={hamburger}
                className="header-nav-toggle"
                onClick={isActive ? closeMenu : openMenu}
              >
                <span className="screen-reader">Menu</span>
                <span className="hamburger">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
              <nav
                ref={nav}
                className={
                  classNames(
                    'header-nav',
                    isActive && 'is-active'
                  )}>
                <div className="header-nav-inner">
                  <ul className={
                    classNames(
                      'list-reset text-xs',
                      navPosition && `header-nav-${navPosition}`
                    )}>
                    <li>
                    {/* <Link to="/Usecases" onClick={closeMenu}>What We Do</Link> */}

                                <NavDropdown
                                  id="nav-dropdown-dark-example"
                                  title="What We Do"
                                  menuVariant="dark"
                                  // style={{  }}
                                > 
                                <NavDropdown.Item href="/brandingsection">
                                Branding
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                  <NavDropdown.Item href="/digitalmarketing">Digital Marketing</NavDropdown.Item>
                                  <NavDropdown.Divider />
                                  <NavDropdown.Item href="/digitaladvertising">
                                  Digital Advertising
                                  </NavDropdown.Item>
                                  <NavDropdown.Divider />
                                  <NavDropdown.Item href="/contentmarketing">Content Marketing</NavDropdown.Item>
                                  <NavDropdown.Divider />
                                  <NavDropdown.Item href="/webdev">
                                    Web Development
                                  </NavDropdown.Item>
                                  <NavDropdown.Divider />
                                  <NavDropdown.Item href="/appdev">App Development</NavDropdown.Item>
                                 
                                 
                                  {/* <NavDropdown.Item href="/seo">
                                  SEO Services
                                  </NavDropdown.Item> */}
                                </NavDropdown>
                                
                                
                          
                    </li>
                    <li>
                    {/* <NavDropdown
                                  id="nav-dropdown-dark-example"
                                  title="Use Cases"
                                  menuVariant="dark"
                                >
                                  <NavDropdown.Item href="/creators">Creators</NavDropdown.Item>
                                  <NavDropdown.Divider />
                                  <NavDropdown.Item href="/startup">
                                  Start-Ups
                                  </NavDropdown.Item>
                                  <NavDropdown.Divider />
                                  <NavDropdown.Item href="/professional">Professionals</NavDropdown.Item>
                                  <NavDropdown.Divider />
                                  <NavDropdown.Item href="/saas">
                                  SaaS
                                  </NavDropdown.Item>
                                  <NavDropdown.Divider />
                                  <NavDropdown.Item href="/ecommerce">
                                  E-commerce
                                  </NavDropdown.Item>
                                </NavDropdown> */}
                    </li>
                       {/* <li>
                      <Link to="/pricing" onClick={closeMenu}>Pricing</Link>
                    </li> */}
                     {/* <li>
                      <Link to="/blog" onClick={closeMenu}>Blog</Link>
                    </li> */}
                      <li>
                      <Link to="/whoweare" onClick={closeMenu}>Who We Are</Link>
                    </li>
                  </ul>
                  {!hideSignin &&
                    <ul
                      className="list-reset header-nav-right"
                    >
                      <li>
                        <Link to="School" className="button button-secondary button-wide-mobile button-sm" onClick={closeMenu}>School</Link>
                      </li>
                    </ul>}
                </div>
              </nav>
            </>}
        </div>
      </div>
    </header>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
