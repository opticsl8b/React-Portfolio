import React from "react";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home-container container grid">
        <div className="home-content grid">
          <div className="home-social">
            <a
              href="https://www.linkedin.com/in/george-cheng-szu-yuan/"
              target="_blank"
              className="home-social-icon"
              //   Security lock
              rel="noreferrer"
            >
              <i className="uil uil-linkedin-alt"></i>
            </a>

            <a
              href="https://github.com/opticsl8b"
              target="_blank"
              className="home-social-icon"
              rel="noreferrer"
            >
              <i className="uil uil-github-alt"></i>
            </a>
          </div>

          <div className="home-img">
            {/* <!-- background remove mask --> */}
            <svg
              className="home-blob"
              viewBox="0 0 200 187"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <mask id="mask0" mask-type="alpha">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                                130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                                0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
              </mask>
              <g mask="url(#mask0)">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
                {/* <!-- x & y to adjust img posisition --> */}
                <image
                  className="home-blob-img"
                  x="0"
                  y="0"
                  xlinkHref="/images/perfil.png"
                  alt="perfil.png"
                />
              </g>
            </svg>
          </div>
          {/* <img src="/images/perfil.png" alt="perfil.png" /> */}

          <div className="home-data">
            <h1 className="home-title">Hi, I'am SzuYuan</h1>
            <h3 className="home-subtitle">Full-Stack Developer</h3>
            <p className="home-description">
              Love to work with inspiring & creative projects and people. Also a
              blockchain surfer.
            </p>
            <a href="#contact" className="button button--flex">
              Contact Me <i className="uil uil-message button-icon"></i>
            </a>
          </div>
        </div>
        <div className="home-scroll">
          <a href="#about" className="home-scroll-button button--flex">
            <i className="uil uil-mouse-alt home-scroll-mouse"></i>
            <span className="home-scroll-name">Scroll down</span>
            <i className="uil uil-arrow-down home-scroll-arrow"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
