import React from "react";

const About = () => {
  return (
    <section class="about section" id="about">
      <h2 class="section-title">About Me</h2>
      <span class="section-subtitle">My Introduction</span>

      <div class="about-container container grid">
        {/* <img src="./asset/img/about.jpg" alt="" class="about-img"> */}
        <div class="about-data">
          <p class="about-description">
            Web developer chela, with strong momentum to absorb, targeting in
            web technologies and Ui / Ux design, delivering quality work.
          </p>

          <div class="about-info">
            <div>
              <span class="about-info-title">6+</span>
              <span class="about-info-name">
                month <br /> experience
              </span>
            </div>

            <div>
              <span class="about-info-title">15+</span>
              <span class="about-info-name">
                Completed <br /> project
              </span>
            </div>

            <div>
              <span class="about-info-title">8+</span>
              <span class="about-info-name">
                Companies <br /> worked
              </span>
            </div>
          </div>

          <div class="about-buttons">
            <a
              download=""
              href="./asset/pdf/GeorgeCV.pdf"
              class="button button--flex"
            >
              Download CV
              <i class="uil uil-download-alt button-icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
