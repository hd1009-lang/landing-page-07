import ContentOneImg from '../../assign/contentone/content-one-img.png';
import Content from '../../components/Content';
const ContentOne = () => {
  return (
    <section className="content-one">
      <Content
        img={ContentOneImg}
        name="Our Feature"
        title="Receive payments
  quickly from anywhere"
        description="Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. "
        hasButton={true}
        linkButton="https://www.google.com/"
      />
    </section>
  );
};

export default ContentOne;
