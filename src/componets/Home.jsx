import React from "react";

const Home = () => {
  return (
    <section class="home section" id="home">
      <div class="home-container container grid">
        <div class="home-content grid">
          <div class="home-social">
            <a
              href="https://www.linkedin.com/in/george-cheng-szu-yuan/"
              target="_blank"
              class="home-social-icon"
              //   Security lock
              rel="noreferrer"
            >
              <i class="uil uil-linkedin-alt"></i>
            </a>

            <a
              href="https://github.com/opticsl8b"
              target="_blank"
              class="home-social-icon"
              rel="noreferrer"
            >
              <i class="uil uil-github-alt"></i>
            </a>
          </div>

          <div class="home-data">
            <h1 class="home-title">Hi, I'am George</h1>
            <h3 class="home-subtitle">Web Development chela,</h3>
            <p class="home-description">
              Love to work with inspiring & creative projects and people. Also a
              blockchain surfer.
            </p>
            <a href="#contact" class="button button--flex">
              Contact Me <i class="uil uil-message button-icon"></i>
            </a>
          </div>
        </div>
        <div class="home-scroll">
          <a href="#about" class="home-scroll-button button--flex">
            <i class="uil uil-mouse-alt home-scroll-mouse"></i>
            <span class="home-scroll-name">Scroll down</span>
            <i class="uil uil-arrow-down home-scroll-arrow"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
