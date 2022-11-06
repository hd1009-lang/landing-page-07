import React, { useState } from 'react';
import ArrowDown from '../../assign/arrow-down.png';
import BarIcon from '../../assign/bar-icon.png';
import TimesIcon from '../../assign/times-icon.png';
const Navigation = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const toggleMenu = () => {
    setIsOpenMenu((currentState) => !currentState);
  };
  return (
    <section className="navigation">
      <h1 className="navigation-name">AR SHAKIR</h1>
      <div className={`navigation-menu ${isOpenMenu && 'active'}`}>
        <img
          src={TimesIcon}
          className="icon-times"
          alt="close box menu"
          onClick={() => toggleMenu()}
        />
        <ul className="menu-list-parent">
          <li className="menu-list-child">
            <span>Product</span>{' '}
            <img className="icon-menu" src={ArrowDown} alt="arrow down icon" />
          </li>
          <li className="menu-list-child">
            <span>Template</span>{' '}
            <img className="icon-menu" src={ArrowDown} alt="arrow down icon" />
          </li>
          <li className="menu-list-child">
            <a href="https://www.google.com">Blog</a>
          </li>
          <li className="menu-list-child">
            <a href="https://www.google.com/">Pricing</a>
          </li>
        </ul>
      </div>
      <div className="navigation-buttons">
        <a href="https://www.google.com/" className="btn btn-sign">
          Sign In
        </a>
        <a href="https://www.google.com/" className="btn btn-start btn-default">
          Start Free
        </a>
      </div>
      <div className="navigation-bar">
        <img src={BarIcon} alt="icon menu list" onClick={() => toggleMenu()} />
      </div>
    </section>
  );
};

export default Navigation;
