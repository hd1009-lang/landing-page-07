import React, { useRef } from 'react';

const FooterCTA = () => {
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
    <section className="footer-cta">
      <div className="footer-cta-left">
        <span className="footer-cta-left-heading">Why Choose Us</span>
        <h3 className="footer-cta-left-title">
          Track your crypto portfolio on the best way possible
        </h3>
        <h4 className="footer-cta-left-description">
          End-to-end payments and financial management in a single solution.
          Meet the right platform to help realize.
        </h4>
      </div>
      <form onSubmit={handleSubmitForm} className="footer-cta-form">
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
    </section>
  );
};

export default FooterCTA;
