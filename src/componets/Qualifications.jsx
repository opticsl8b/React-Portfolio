import React from "react";

const Qualifications = () => {
  return (
    // <!--== QUALIFICATION ==-->
    <section class="qualification section">
      <h2 class="section-title">Qualification</h2>
      <span class="section-subtitle">My Personal Journey</span>
      <div class="qualification-container container">
        <div class="qualification-tabs">
          <div
            class="qualification-button button--flex qualification-active"
            data-target="#education"
          >
            <i class="uil uil-graduation-cap qualification-icon"></i> Education
          </div>
          <div class="qualification-button button--flex" data-target="#work">
            <i class="uil uil-briefcase-alt qualification-icon"></i> Work
          </div>
        </div>
        <div class="qualification-sections">
          {/* <!--== Content I ==--> */}
          <div class="qualification-content" data-content id="education">
            {/* <!-- Qualification I --> */}
            <div class="qualification-data">
              <div>
                <h3 class="qualification-title">Web Development</h3>
                <span class="qualification-subtitle">
                  Australia - The University of West Australia
                </span>
                <div class="qualification-calendar">
                  <i class="uil uil-calendar-alt"></i> 2021 - 2022
                </div>
              </div>
              <div>
                <span class="qualification-rounder"></span>
                <span class="qualification-line"></span>
              </div>
            </div>
            {/* <!-- Qualification II --> */}
            <div class="qualification-data">
              <div></div>

              <div>
                <span class="qualification-rounder"></span>
                <span class="qualification-line"></span>
              </div>

              <div>
                <h3 class="qualification-title">Commercial Cookery</h3>
                <span class="qualification-subtitle">
                  Australia - Empyrean Education Institute
                </span>
                <div class="qualification-calendar">
                  <i class="uil uil-calendar-alt"></i> 2013 - 2014
                </div>
              </div>
            </div>
            {/* <!-- Qualification III --> */}
            <div class="qualification-data">
              <div>
                <h3 class="qualification-title">Business Administration</h3>
                <span class="qualification-subtitle">
                  Taiwan - National Taipei University
                </span>
                <div class="qualification-calendar">
                  <i class="uil uil-calendar-alt"></i> 2006 - 2010
                </div>
              </div>
              <div>
                <span class="qualification-rounder"></span>
                {/* <!-- <span class="qualification-line"></span> --> */}
              </div>
            </div>
          </div>
          {/* <!--== Content II -Work ==--> */}
          <div class="qualification-content" data-content id="work">
            {/* <!-- Work I --> */}
            <div class="qualification-data">
              {/* <!-- div for layout --> */}
              <div></div>
              <div>
                <span class="qualification-rounder"></span>
                <span class="qualification-line"></span>
              </div>

              <div>
                <h3 class="qualification-title">Courier</h3>
                <span class="qualification-subtitle">Sherpa -Australia</span>
                <div class="qualification-calendar">
                  <i class="uil uil-calendar-alt"></i> 2020 - Present
                </div>
              </div>
            </div>
            {/* <!-- Work II --> */}
            <div class="qualification-data">
              <div>
                <h3 class="qualification-title">Entrepreneur</h3>
                <span class="qualification-subtitle">
                  Oz GoodLife -Australia
                </span>
                <div class="qualification-calendar">
                  <i class="uil uil-calendar-alt"></i> 2018 - 2021
                </div>
              </div>
              <div>
                <span class="qualification-rounder"></span>
                <span class="qualification-line"></span>
              </div>
            </div>
            {/* <!-- Work III --> */}
            <div class="qualification-data">
              {/* <!-- div for layout --> */}
              <div></div>
              <div>
                <span class="qualification-rounder"></span>
                <span class="qualification-line"></span>
              </div>
              <div>
                <h3 class="qualification-title">FIFO Chef</h3>
                <span class="qualification-subtitle"> Hays -Australia</span>
                <div class="qualification-calendar">
                  <i class="uil uil-calendar-alt"></i> 2017 - 2019
                </div>
              </div>
            </div>
            {/* <!-- Work IV --> */}
            <div class="qualification-data">
              <div>
                <h3 class="qualification-title">Chef de partie</h3>
                <span class="qualification-subtitle">
                  {" "}
                  The Cavern -Australia
                </span>
                <div class="qualification-calendar">
                  <i class="uil uil-calendar-alt"></i> 2013 - 2016
                </div>
              </div>
              <div>
                <span class="qualification-rounder"></span>
                {/* <!-- <span class="qualification-line"></span> --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
