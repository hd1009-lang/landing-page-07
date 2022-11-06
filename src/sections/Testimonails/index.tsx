import QuoteIcon from '../../assign/testimonails/icon-quote.png';
import MainImg from '../../assign/testimonails/img.png';
import DotIcon from '../../assign/testimonails/item-dot.png';
import ArrowLeft from '../../assign/testimonails/arrow-left.png';
import ArrowRight from '../../assign/testimonails/arrow-right.png';
import QuoteIconNoBorder from '../../assign/testimonails/quote-no-border.png';
import FiveStars from '../../assign/testimonails/stars.png';
const Testimonails = () => {
  return (
    <section className="testimonails">
      <div className="testimonails-left">
        <h3 className="testimonails-left-name">Testimonials</h3>
        <h4 className="testimonails-left-title">
          Check what our clients are saying
        </h4>
        <div className="testimonails-left-group-img">
          <img src={DotIcon} alt="dot icon" className="dot-icon" />
          <img src={MainImg} alt="main img" className="main-img" />
          <img src={QuoteIcon} alt="quote icon" className="quote-icon" />
        </div>
        <div className="testimonails-left-group-btn-slide">
          <button className="btn-default btn-slide">
            <img src={ArrowLeft} alt="previous slide" />
          </button>
          <button className="btn-default btn-slide">
            <img src={ArrowRight} alt="next slide" />
          </button>
        </div>
      </div>
      <div className="testimonails-right">
        <img
          src={QuoteIconNoBorder}
          alt="quote icon"
          className="testimonails-right-quote-icon"
        />
        <h3 className="testimonails-right-title">
          Save Time Managing Social Media For Your Business
        </h3>
        <p className="testimonails-right-description">
          Is be upon sang fond must shew. Really boy law county she unable her
          sister. Feet you off its like like six. Among sex are leave law built
          now. In built table in an rapid blush. Merits behind on afraid or
          warmly.
        </p>
        <p className="testimonails-right-description">
          {' '}
          Believing neglected so so allowance existence departure in. In design
          active temper be uneasy.{' '}
        </p>
        <img src={FiveStars} alt="five stars" />
        <h4 className="testimonails-right-ceo">Angela Taylor</h4>
        <span className="testimonails-right-rule">CEO SAMSUNG</span>
      </div>
    </section>
  );
};

export default Testimonails;
