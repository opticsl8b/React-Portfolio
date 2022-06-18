import React from "react";

const ContactMe = () => {
  return (
    <section class="contact section" id="contact">
      <h2 class="section-title">Contact Me</h2>
      <span class="section-subtitle">Get in touch</span>

      <div class="contact-container container grid">
        <div>
          <div class="contact-information">
            <i class="uil uil-phone contact-icon"></i>
            <div>
              <h3 class="contact-title">Call Me</h3>
              <span class="contact-subtitle">0402-197-579</span>
            </div>
          </div>

          <div class="contact-information">
            <i class="uil uil-envelope contact-icon"></i>
            <div>
              <h3 class="contact-title">Email</h3>
              <span class="contact-subtitle">unipisq@gmail.com</span>
            </div>
          </div>

          <div class="contact-information">
            <i class="uil uil-map-marker contact-icon"></i>
            <div>
              <h3 class="contact-title">Location</h3>
              <span class="contact-subtitle">Australia - Perth</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
