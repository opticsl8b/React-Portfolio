import React from "react";

const Portfolio = () => {
  return (
    // <!--== PORTFOLIO ==-->
    <section class="portfolio section" id="portfolio">
      <h2 class="section-title">Portfolio</h2>
      <span class="section-subtitle">Most recent work</span>

      <div class="portfolio-container container swiper mySwiper">
        <div class="swiper-wrapper">
          {/* <!--== Portfolio I ==--> */}
          <div class="portfolio-content grid swiper-slide">
            <img
              src="./asset/img/portfolio4.png"
              alt=""
              class="portfolio-img"
            />

            <div class="portfolio-data">
              <h3 class="portfolio-title">Doggy Day Care</h3>
              <p class="portfolio-description">
                A real-world full-stack application aiming to deliver A handy
                booking tool with trendy look and a friendly UI/UX.
              </p>
              <a
                href="https://doggy-day-care-gula.herokuapp.com/"
                rel="noreferrer"
                class="button button--flex button--small portfolio-button"
                target="_blank"
              >
                Demo
                <i class="uil uil-arrow-right button-icon"></i>
              </a>
              <a
                href="https://github.com/opticsl8b/Doggy-Day-Care"
                rel="noreferrer"
                class="button button--flex button--small portfolio-button"
                target="_blank"
              >
                <i class="uil uil-github-alt"></i>
                <i class="uil uil-arrow-right button-icon"></i>
              </a>
            </div>
          </div>

          {/* <!--== Portfolio II ==--> */}
          <div class="portfolio-content grid swiper-slide">
            <img
              src="./asset/img/portfolio1.png"
              alt=""
              class="portfolio-img"
            />

            <div class="portfolio-data">
              <h3 class="portfolio-title">Crypto Lane</h3>
              <p class="portfolio-description">
                A simple tracking app for cryptocurrency assets. Seasoned with
                80's pixel theme style.
              </p>
              <a
                href="https://opticsl8b.github.io/Project-Crypto-Lane/"
                rel="noreferrer"
                class="button button--flex button--small portfolio-button"
                target="_blank"
              >
                Demo
                <i class="uil uil-arrow-right button-icon"></i>
              </a>
              <a
                href="https://github.com/opticsl8b/Project-Crypto-Lane"
                rel="noreferrer"
                class="button button--flex button--small portfolio-button"
                target="_blank"
              >
                <i class="uil uil-github-alt"></i>
                <i class="uil uil-arrow-right button-icon"></i>
              </a>
            </div>
          </div>
          {/* <!--== Portfolio III ==--> */}
          <div class="portfolio-content grid swiper-slide">
            <img
              src="./asset/img/portfolio2.jpg"
              alt=""
              class="portfolio-img"
            />

            <div class="portfolio-data">
              <h3 class="portfolio-title">Code Quiz</h3>
              <p class="portfolio-description">
                An application that generates a timed quiz on JavaScript
                fundamentals that stores high scores.
              </p>
              <a
                href="https://opticsl8b.github.io/Code-Quiz/"
                rel="noreferrer"
                class="button button--flex button--small portfolio-button"
                target="_blank"
              >
                Demo
                <i class="uil uil-arrow-right button-icon"></i>
              </a>
              <a
                href="https://github.com/opticsl8b/Code-Quiz"
                rel="noreferrer"
                class="button button--flex button--small portfolio-button"
                target="_blank"
              >
                <i class="uil uil-github-alt"></i>
                <i class="uil uil-arrow-right button-icon"></i>
              </a>
            </div>
          </div>

          {/* <!--== Portfolio IV ==--> */}
          <div class="portfolio-content grid swiper-slide">
            <img
              src="./asset/img/portfolio3.png"
              alt=""
              class="portfolio-img"
            />

            <div class="portfolio-data">
              <h3 class="portfolio-title">Weather Dashboard</h3>
              <p class="portfolio-description">
                A simple weather app for weather outlook by cities. Seasoned
                with 80's pixel theme style.
              </p>
              <a
                href="https://opticsl8b.github.io/Weather-Dashboard/"
                rel="noreferrer"
                class="button button--flex button--small portfolio-button"
                target="_blank"
              >
                Demo
                <i class="uil uil-arrow-right button-icon"></i>
              </a>
              <a
                href="https://github.com/opticsl8b/Weather-Dashboard"
                rel="noreferrer"
                class="button button--flex button--small portfolio-button"
                target="_blank"
              >
                <i class="uil uil-github-alt"></i>
                <i class="uil uil-arrow-right button-icon"></i>
              </a>
            </div>
          </div>
        </div>
        {/* <!-- Arrows & pagination --> */}
        <div class="swiper-button-next">
          <i class="uil uil-angle-right-b swiper-portfolio-icon"></i>
        </div>
        <div class="swiper-button-prev">
          <i class="uil uil-angle-left-b swiper-portfolio-icon"></i>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default Portfolio;
