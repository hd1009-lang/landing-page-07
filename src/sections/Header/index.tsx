import ArrowRight from '../../assign/arrow-right.png';
import HeaderImg from '../../assign/header/header-img.png';
const Header = () => {
  return (
    <section className="header">
      <div className="header-content">
        <div className="header-content-left">
          <h2 className="content-left-title">
            Managing business payments has never been easier
          </h2>
          <p className="content-left-description">
            End-to-end payments and financial management in a single solution.
            Meet the right platform to help realize.
          </p>
          <div className="content-left-buttons">
            <a
              href="https://www.google.com"
              className="btn btn-start btn-default"
            >
              Get Started
            </a>
            <div className="group-btn-play">
              <a href="https://www.google.com" className="btn btn-try">
                <img src={ArrowRight} alt="Button see how it works" />
              </a>
              <span className="btn-play-description">See How It Works</span>
            </div>
          </div>
        </div>
        <div className="header-content-right">
          <img
            src={HeaderImg}
            className="header-img"
            alt="Received by AR SHAKIR"
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
