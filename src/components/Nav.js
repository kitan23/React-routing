import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

const NavBurger = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <a href="#" className="burger" onClick={() => setOpen(!open)}>
        <li className="line1"></li>
        <li className="line2"></li>
        <li className="line3"></li>
      </a>
      {open && props.children}
    </div>
  );
};

function Nav() {
  return (
    <nav className="nav_bar">
      <Link className="logo" to="/">
        Home
      </Link>
      <ul className="nav_links">
        <Link className="a" to="/about">
          <li>About</li>
        </Link>
        <Link className="a" to="/book">
          <li>Book</li>
        </Link>
        <Link className="a" to="/todo">
          <li>To do</li>
        </Link>
      </ul>
      <NavBurger className="toggle">
        <DropdownMenu></DropdownMenu>
      </NavBurger>
    </nav>
  );
}

export default Nav;

const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(ele) {
    const height = ele.offsetHeight;
    setMenuHeight(height);
  }
  const DropDownItem = (props) => {
    return (
      <a
        href="#"
        className="menu-item"
        onClick={() => {
          setActiveMenu(props.goToMenu);
        }}
      >
        {props.children}
      </a>
    );
  };

  return (
    <div className="dropdown" style={{ height: menuHeight }}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropDownItem goToMenu="settings">My Profile</DropDownItem>
          <DropDownItem goToMenu="settings">Settings</DropDownItem>
          <Link className="menu-item" to="/">
            Home
          </Link>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "settings"}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="menu">
          <DropDownItem goToMenu="main">Back to Main</DropDownItem>
          <DropDownItem goToMenu="main">Back to Main</DropDownItem>
        </div>
      </CSSTransition>
    </div>
  );
};
