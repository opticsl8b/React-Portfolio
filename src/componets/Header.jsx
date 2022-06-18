import React from "react";

const Header = () => {
  const navMenu = document.getElementById("nav-menu");
  const navToggle = document.getElementById("nav-toggle");
  const navClose = document.getElementById("nav-close");
  const navLink = document.querySelectorAll(".nav-link");

  function handleClick(e) {
    e.preventDefault();
    if (navToggle) {
      navMenu.classList.add("show-menu");
    }
    if (navClose) {
      navMenu.classList.remove("show-menu");
    }
  }

  return (
    <header class="header" id="header">
      <nav class="nav container">
        <a href="..." class="nav-logo" id="author-name">
          George
        </a>
        <div class="nav-menu" id="nav-menu">
          <ul class="nav-list grid">
            <li class="nav-item">
              <a href="#home" class="nav-link">
                <i class="uil uil-estate nav-icon"></i> Home
              </a>
            </li>

            <li class="nav-item">
              <a href="#about" class="nav-link">
                <i class="uil uil-user-square nav-icon"></i> About
              </a>
            </li>

            <li class="nav-item">
              <a href="#skills" class="nav-link">
                <i class="uil uil-file-alt nav-icon"></i> Skills
              </a>
            </li>

            <li class="nav-item">
              <a href="#services" class="nav-link">
                <i class="uil uil-briefcase-alt nav-icon"></i> Services
              </a>
            </li>
            <li class="nav-item">
              <a href="#portfolio" class="nav-link">
                <i class="uil uil-scenery nav-icon"></i> Portfolio
              </a>
            </li>

            <li class="nav-item">
              <a href="#contact" class="nav-link">
                <i class="uil uil-message nav-icon"></i> Contact Me
              </a>
            </li>
          </ul>
          <i
            class="uil uil-times nav-close"
            id="nav-close"
            onClick={handleClick}
          ></i>
        </div>

        <div class="nav-btns">
          {/* <!-- Theme Cheng Button --> */}
          <i class="uil uil-moon change-theme" id="theme-button"></i>

          <div class="nav-toggle" id="nav-toggle" onClick={handleClick}>
            <i class="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
