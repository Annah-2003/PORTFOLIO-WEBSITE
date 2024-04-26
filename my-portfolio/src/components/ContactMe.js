// components/ContactMe.js

import React from 'react';

const ContactMe = () => {
  return (
    <section id="contact-me">
      <div className="container">
        <h2>Contact Me</h2>
        <p>You can reach me via email at <a href="mailto:gitauirene56@gmail.com">gitauirene56@gmail.com</a> or connect with me on <a href="https://www.linkedin.com/in/irene-gitau">LinkedIn</a>.</p>
        <h3>Send me a message</h3>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4"></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
}

export default ContactMe;
