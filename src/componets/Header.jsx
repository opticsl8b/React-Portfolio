import React from "react";

const Header = () => {
  const navMenu = document.getElementById("nav-menu");
  const navToggle = document.getElementById("nav-toggle");
  const navClose = document.getElementById("nav-close");

  function handleClickShow(e) {
    e.preventDefault();
    if (navToggle) {
      navMenu.classList.add("show-menu");
    }
  }
  function handleClickRemove(e) {
    e.preventDefault();

    if (navClose) {
      navMenu.classList.remove("show-menu");
    }
  }

  function handleClickRemoveNav(e) {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.remove("show-menu");
  }

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="..." className="nav-logo" id="author-name">
          George
        </a>
        <div className="nav-menu" id="nav-menu">
          <ul className="nav-list grid">
            <li className="nav-item">
              <a
                href="#home"
                className="nav-link"
                onClick={handleClickRemoveNav}
              >
                <i className="uil uil-estate nav-icon"></i> Home
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#about"
                className="nav-link"
                onClick={handleClickRemoveNav}
              >
                <i className="uil uil-user-square nav-icon"></i> About
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#skills"
                className="nav-link"
                onClick={handleClickRemoveNav}
              >
                <i className="uil uil-file-alt nav-icon"></i> Skills
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#services"
                className="nav-link"
                onClick={handleClickRemoveNav}
              >
                <i className="uil uil-briefcase-alt nav-icon"></i> Services
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#portfolio"
                className="nav-link"
                onClick={handleClickRemoveNav}
              >
                <i className="uil uil-scenery nav-icon"></i> Portfolio
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#contact"
                className="nav-link"
                onClick={handleClickRemoveNav}
              >
                <i className="uil uil-message nav-icon"></i> Contact Me
              </a>
            </li>
          </ul>
          <i
            className="uil uil-times nav-close"
            id="nav-close"
            onClick={handleClickRemove}
          ></i>
        </div>

        <div className="nav-btns">
          {/* <!-- Theme Cheng Button --> */}
          <i className="uil uil-moon change-theme" id="theme-button"></i>

          <div className="nav-toggle" id="nav-toggle" onClick={handleClickShow}>
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
