import React from "react";

const Skills = () => {
  return (
    <section class="skills section" id="skills">
      <h2 class="section-title">Skills</h2>
      <span class="section-subtitle">My Technical Level</span>
      <div class="skills-container container grid">
        <div>
          {/* <!-- Skills I --> */}
          <div class="skills-content skills-open">
            <div class="skills-header">
              <i class="uil uil-brackets-curly skills-icon"></i>
              <div>
                <h1 class="skills-career">Frontend Developer</h1>
                <span class="skills-subtitle"></span>
              </div>
              <i class="uil uil-angle-down skills-arrow"></i>
            </div>

            <div class="skills-list grid">
              <div class="skills-data">
                <div class="skills-title">
                  <h3 class="skills-name">HTML</h3>
                  <span class="skills-number">80%</span>
                </div>
                <div class="skills-bar">
                  <span class="skills-percentage skills-html"></span>
                </div>
              </div>

              <div class="skills-data">
                <div class="skills-title">
                  <h3 class="skills-name">CSS</h3>
                  <span class="skills-number">80%</span>
                </div>
                <div class="skills-bar">
                  <span class="skills-percentage skills-css"></span>
                </div>
              </div>

              <div class="skills-data">
                <div class="skills-title">
                  <h3 class="skills-name">JavaScript</h3>
                  <span class="skills-number">75%</span>
                </div>
                <div class="skills-bar">
                  <span class="skills-percentage skills-js"></span>
                </div>
              </div>

              <div class="skills-data">
                <div class="skills-title">
                  <h3 class="skills-name">React</h3>
                  <span class="skills-number">5%</span>
                </div>
                <div class="skills-bar">
                  <span class="skills-percentage skills-react"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* <!-- Skills II --> */}
          <div class="skills-content skills-close">
            <div class="skills-header">
              <i class="uil uil-server-network skills-icon"></i>

              <div>
                <h1 class="skills-career">Backend Developer</h1>
                <span class="skills-subtitle"></span>
              </div>
              <i class="uil uil-angle-down skills-arrow"></i>
            </div>

            <div class="skills-list grid">
              <div class="skills-data">
                <div class="skills-title">
                  <h3 class="skills-name">MySQL</h3>
                  <span class="skills-number">70%</span>
                </div>
                <div class="skills-bar">
                  <span class="skills-percentage skills-mysql"></span>
                </div>
              </div>

              <div class="skills-data">
                <div class="skills-title">
                  <h3 class="skills-name">Node Js</h3>
                  <span class="skills-number">80%</span>
                </div>
                <div class="skills-bar">
                  <span class="skills-percentage skills-node"></span>
                </div>
              </div>
              <div class="skills-data">
                <div class="skills-title">
                  <h3 class="skills-name">Handlebar</h3>
                  <span class="skills-number">70%</span>
                </div>
                <div class="skills-bar">
                  <span class="skills-percentage skills-Handlebar"></span>
                </div>
              </div>
              <div class="skills-data">
                <div class="skills-title">
                  <h3 class="skills-name">Python</h3>
                  <span class="skills-number">5%</span>
                </div>
                <div class="skills-bar">
                  <span class="skills-percentage skills-python"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
