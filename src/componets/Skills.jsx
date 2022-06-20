import React from "react";
// import csslogo from "../../public/images/skillicon/css.png";

const Skills = () => {
  const skillsContent = document.getElementsByClassName("skills-content");
  const skillsHeader = document.querySelectorAll(".skills-header");

  function toggleSkills() {
    let itemClass = this.parentNode.className;

    for (let i = 0; i < skillsContent.length; i++) {
      skillsContent[i].className = "skills-content skills-close";
    }
    if (itemClass === "skills-content skills-close") {
      this.parentNode.className = "skills-content skills-open";
    }
  }

  function handleClick(e) {
    e.preventDefault();
    toggleSkills();
  }
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>
      <span className="section-subtitle">My Technical Tool Box</span>
      <div className="skills-container container grid">
        <div>
          {/* <!-- Skills I --> */}
          <div className="skills-content skills-open">
            <div className="skills-header">
              <i className="uil uil-brackets-curly skills-icon"></i>
              <div>
                <h1 className="skills-career">Front-end</h1>
                <span className="skills-subtitle"></span>
              </div>
              <i className="uil uil-angle-down skills-arrow"></i>
            </div>

            <div className="skills-list grid">
              <div className="skills-data">
                <div className="skills-title">
                  <h3 className="skills-name">- HTML</h3>
                  {/* <span className="skills-number">80%</span> */}
                  {/* <img src="/html.png" alt="html" /> */}
                </div>
                {/* <div className="skills-bar">
                  <span className="skills-percentage skills-html"></span>
                </div> */}
              </div>

              <div className="skills-data">
                <div className="skills-title">
                  <h3 className="skills-name">- CSS</h3>
                  {/* <span className="skills-number">80%</span> */}
                </div>
                {/* <div className="skills-bar">
                  <span className="skills-percentage skills-css"></span>
                </div> */}
              </div>

              <div className="skills-data">
                <div className="skills-title">
                  <h3 className="skills-name">- JavaScript</h3>
                  {/* <span className="skills-number">
                    <img src={"./skillicon/javascript.png"} alt="javascript" />
                  </span> */}
                </div>
                {/* <div className="skills-bar">
                  <span className="skills-percentage skills-js"></span>
                </div> */}
              </div>

              <div className="skills-data">
                <div className="skills-title">
                  <h3 className="skills-name">- React</h3>
                  {/* <span className="skills-number"> */}
                  {/* <img src={"./skillicon/react.png"} alt="react" /> */}
                  {/* </span> */}
                </div>
                {/* <div className="skills-bar">
                  <span className="skills-percentage skills-react"></span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* <!-- Skills II --> */}
          <div className="skills-content skills-close">
            <div className="skills-header">
              <i className="uil uil-server-network skills-icon"></i>

              <div>
                <h1 className="skills-career">Back-end</h1>
                <span className="skills-subtitle"></span>
              </div>
              <i className="uil uil-angle-down skills-arrow"></i>
            </div>

            <div className="skills-list grid">
              <div className="skills-data">
                <div className="skills-title">
                  <h3 className="skills-name">MySQL</h3>
                  {/* <span className="skills-number">70%</span> */}
                </div>
                <div className="skills-bar">
                  <span className="skills-percentage skills-mysql"></span>
                </div>
              </div>

              <div className="skills-data">
                <div className="skills-title">
                  <h3 className="skills-name">Node Js</h3>
                  {/* <span className="skills-number">80%</span> */}
                </div>
                <div className="skills-bar">
                  <span className="skills-percentage skills-node"></span>
                </div>
              </div>
              <div className="skills-data">
                <div className="skills-title">
                  <h3 className="skills-name">Handlebar</h3>
                  {/* <span className="skills-number">70%</span> */}
                </div>
                <div className="skills-bar">
                  <span className="skills-percentage skills-Handlebar"></span>
                </div>
              </div>
              <div className="skills-data">
                <div className="skills-title">
                  <h3 className="skills-name">Python</h3>
                  {/* <span className="skills-number">5%</span> */}
                </div>
                <div className="skills-bar">
                  <span className="skills-percentage skills-python"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* <!-- Skills III --> */}
          {/* <div className="skills-content skills-close">
            <div className="skills-header">
              <i className="uil uil-server-network skills-icon"></i>

              <div>
                <h1 className="skills-career">Back-end</h1>
                <span className="skills-subtitle"></span>
              </div>
              <i className="uil uil-angle-down skills-arrow"></i>
            </div>

            <div className="skills-list grid">
              <div className="skills-data">
                <div className="skills-title">
                  <h3 className="skills-name">MySQL</h3>
                  <span className="skills-number">70%</span>
                </div>
                <div className="skills-bar">
                  <span className="skills-percentage skills-mysql"></span>
                </div>
              </div>

              <div className="skills-data">
                <div className="skills-title">
                  <h3 className="skills-name">Node Js</h3>
                  <span className="skills-number">80%</span>
                </div>
                <div className="skills-bar">
                  <span className="skills-percentage skills-node"></span>
                </div>
              </div>
              <div className="skills-data">
                <div className="skills-title">
                  <h3 className="skills-name">Handlebar</h3>
                  <span className="skills-number">70%</span>
                </div>
                <div className="skills-bar">
                  <span className="skills-percentage skills-Handlebar"></span>
                </div>
              </div>
              <div className="skills-data">
                <div className="skills-title">
                  <h3 className="skills-name">Python</h3>
                  <span className="skills-number">5%</span>
                </div>
                <div className="skills-bar">
                  <span className="skills-percentage skills-python"></span>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
