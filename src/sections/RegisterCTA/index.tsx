import ContentFeature from '../../components/ContentFeature';
import IconRegister from '../../assign/register-cta/img.png';
import React, { useRef } from 'react';
const RegisterCTA = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    if (email && password) {
      const data = {
        email,
        password,
      };
      console.log(data);
    } else {
      alert('Nhập đầy đủ thông tin');
    }
  };
  return (
    <section className="register-cta">
      <img
        src={IconRegister}
        alt="icon from register"
        className="icon-register"
      />
      <div className="register-cta-text">
        <ContentFeature
          name="Our Feature"
          title="Receive payments
quickly from anywhere"
          description="Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. "
          hasButton={false}
        />
      </div>
      <div className="register-cta-form">
        <span className="form-label">Get Started for Free</span>
        <form onSubmit={handleSubmitForm} className="form-register">
          <input
            ref={emailRef}
            className="form-input"
            type="text"
            placeholder="Email Address"
          />
          <input
            ref={passwordRef}
            className="form-input"
            type="password"
            placeholder="Password"
          />
          <button className="btn form-btn">Get Started</button>
        </form>
      </div>
    </section>
  );
};

export default RegisterCTA;
