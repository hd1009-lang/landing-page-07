import Navigation from './sections/Navigation';
import Header from './sections/Header';
import RelatedCompanies from './sections/Companies';
import ContentOne from './sections/ContentOne';
import RegisterCTA from './sections/RegisterCTA';
import ContentTwo from './sections/ContentTwo';
import Testimonails from './sections/Testimonails';
import CTA from './sections/CTA';
import ContentThree from './sections/ContentThree';
import WhyChooseUs from './sections/WhyChoose';
import FooterCTA from './sections/FooterCTA';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="container">
      <Navigation />
      <Header />
      <RelatedCompanies />
      <ContentOne />
      <RegisterCTA />
      <ContentTwo />
      <Testimonails />
      <CTA />
      <ContentThree />
      <WhyChooseUs />
      <FooterCTA />
      <Footer />
    </div>
  );
}

export default App;
