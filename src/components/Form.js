import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Form.css';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleChanges = (newValue, inputType) => {
    switch (inputType) {
      case 'name':
        setName(newValue);
        break;
      case 'email':
        setEmail(newValue);
        break;
      case 'message':
        setMessage(newValue);
        break;
      case 'all':
        setName('');
        setEmail('');
        setMessage('');
        break;
      default:
        break;
    }
  }

  const sendEmail = (ev) => {
    ev.preventDefault();

    console.log(ev.target);

    emailjs.sendForm('gmail', 'madappgang', ev.target, 'user_rpqMEc9iyfA55eL325N2U')
      .then((result) => {
        if (result.text === 'OK') {
          handleChanges('', 'all');
          alert('Thanks for filling out our form!');
        }
      }, (error) => {
        console.log(error.text);
      });
  }

  return (
    <div className="page-wrapper">
      <section className="contacts-page">
        <div className="contacts-page--content container">
          <div className="contacts-page--head section--head">
            <h1 className="section--title">Get in touch</h1>
            <div className="section--subtitle">Let us know <br /> how we can help</div>
          </div>
          <div className="contacts-page--body">
            <div className="contact--form-wrapper">
              <form className="contact--form" onSubmit={sendEmail}>
                <input
                  type="text"
                  name="name"
                  className="contact--form-input"
                  placeholder="Name"
                  required
                  pattern="[A-z]+"
                  value={name}
                  onChange={(ev) => handleChanges(ev.target.value, 'name')}
                />
                <input
                  type="email"
                  name="email"
                  className="contact--form-input"
                  placeholder="E-mail"
                  required
                  pattern="[A-z][A-z0-9.]+@[A-z]+.[A-z]{2,8}"
                  value={email}
                  onChange={(ev) => handleChanges(ev.target.value, 'email')}
                />
                <textarea
                  name="message"
                  className="contact--form-input"
                  placeholder="Message"
                  spellCheck="false"
                  value={message}
                  onChange={(ev) => handleChanges(ev.target.value, 'message')}
                >

                </textarea>
                <button
                  type="submit"
                  className="link-button dark wide"
                >
                  Send
                </button>
              </form>
            </div>
            <div className="contacts-page--next">
              <h3 className="contacts-page--next-title">What's next</h3>
              <p>We’ll contact you within a few hours with our next steps. We normally schedule a call with our engineers
              to discuss your project in more detail. If you’d like to sign an NDA, please let us know. We’ll prepare it
              for you.</p>
              <p>Since we live on two different continents (Australia and Europe) we are available around the clock.</p>
            </div>
          </div>
        </div>
        <div className="contacts-page--visit container">
          <h3 className="contacts-page--visit-title">Visit us</h3>
          <div className="contacts-page--visit-text">Our company management and business development team is located in
          Sydney, Australia. Our engineering team is located in Kremenchuk, Ukraine.</div>
          <img className="contacts-page--visit-image" alt="macbook"
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjY0cHgiIGhlaWdodD0iMTQycHgiIHZpZXdCb3g9IjAgMCAyNjQgMTQyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1MCAoNTQ5ODMpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPk1hY2Jvb2sgaWxsdXN0cmF0aW9uPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGRlZnM+CiAgICAgICAgPGxpbmVhckdyYWRpZW50IHgxPSI4Ny44OTY3NDA0JSIgeTE9IjQ1LjAzMTI4NTMlIiB4Mj0iLTEwMC41NjM3NzIlIiB5Mj0iNDUuMDMxMjg1MyUiIGlkPSJsaW5lYXJHcmFkaWVudC0xIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRkZGRiIgc3RvcC1vcGFjaXR5PSIwIiBvZmZzZXQ9IjAlIj48L3N0b3A+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNGRkZGRkYiIHN0b3Atb3BhY2l0eT0iMC4zNTk0MDg2MDIiIG9mZnNldD0iNTYuMTA3MDM4MSUiPjwvc3RvcD4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZGRkZGRiIgb2Zmc2V0PSIxMDAlIj48L3N0b3A+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJXZWIiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJXZWJfR2V0X2luX3RvdWNoIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODMzLjAwMDAwMCwgLTcxMi4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9Ik1hY2Jvb2staWxsdXN0cmF0aW9uIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4MzMuMDAwMDAwLCA3MDIuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iUmVjdGFuZ2xlIiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNzkuOTc5NjcyLCAzMS4wMDAwMDApIHJvdGF0ZSgtOTAuMDAwMDAwKSB0cmFuc2xhdGUoLTE3OS45Nzk2NzIsIC0zMS4wMDAwMDApICIgcG9pbnRzPSIxNTEuOTc5NjcyIC01My45Nzk2NzIxIDIwNy45Nzk2NzIgLTQyLjkwNDMyMjcgMjA3Ljk3OTY3MiAxMTUuOTc5NjcyIDE1MS45Nzk2NzIgMTA0LjAzMDA0MSI+PC9wb2x5Z29uPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTU1LDE0NiBMMjMwLDE0NiBMMjMwLDE0NiBDMjMwLDE0OS4zMTM3MDggMjI3LjMxMzcwOCwxNTIgMjI0LDE1MiBMNTUsMTUyIEw1NSwxNDYgWiIgaWQ9IlJlY3RhbmdsZS0xNyIgZmlsbD0iI0I4QzBEMCI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTAsMTQ2IEw3NywxNDYgQzc4LjY1Njg1NDIsMTQ2IDgwLDE0Ny4zNDMxNDYgODAsMTQ5IEw4MCwxNDkgQzgwLDE1MC42NTY4NTQgNzguNjU2ODU0MiwxNTIgNzcsMTUyIEw2LDE1MiBDMi42ODYyOTE1LDE1MiA0LjA1ODEyMjUxZS0xNiwxNDkuMzEzNzA4IDAsMTQ2IFoiIGlkPSJSZWN0YW5nbGUtMTctQ29weSIgZmlsbD0iI0Q1RDhERSI+PC9wYXRoPgogICAgICAgICAgICAgICAgPHBhdGggZD0iTTEwOC40MzQ5NTgsMzQgTDI0Ni44OTEyNDUsMzQgQzI1Mi40MTQwOTMsMzQgMjU2Ljg5MTI0NSwzOC40NzcxNTI1IDI1Ni44OTEyNDUsNDQgQzI1Ni44OTEyNDUsNDQuNjM0NDMzNiAyNTYuODMwODcsNDUuMjY3NDI3NSAyNTYuNzEwOTM1LDQ1Ljg5MDQyMTYgTDIzOS4zODQ3MzIsMTM1Ljg5MDQyMiBDMjM4LjQ3ODQ3NywxNDAuNTk3OTExIDIzNC4zNTg5NzEsMTQ0IDIyOS41NjUwNDIsMTQ0IEw5MS4xMDg3NTQ4LDE0NCBDODUuNTg1OTA3MywxNDQgODEuMTA4NzU0OCwxMzkuNTIyODQ3IDgxLjEwODc1NDgsMTM0IEM4MS4xMDg3NTQ4LDEzMy4zNjU1NjYgODEuMTY5MTMwNCwxMzIuNzMyNTczIDgxLjI4OTA2NTEsMTMyLjEwOTU3OCBMOTguNjE1MjY4Myw0Mi4xMDk1Nzg0IEM5OS41MjE1MjMsMzcuNDAyMDg5MSAxMDMuNjQxMDI5LDM0IDEwOC40MzQ5NTgsMzQgWiIgaWQ9IlJlY3RhbmdsZS0xNiIgZmlsbD0iI0UyRTVFQiI+PC9wYXRoPgogICAgICAgICAgICAgICAgPGNpcmNsZSBpZD0iT3ZhbC04IiBmaWxsPSIjRkZGRkZGIiBjeD0iMTcyIiBjeT0iODkiIHI9IjEyIj48L2NpcmNsZT4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+" />
        </div>
      </section>
    </div>
  );
}

export default Form;