import React from 'react';
import Content from '../../components/Content';
import ContentTwoImg from '../../assign/content-two/img-2.png';
const ContentTwo = () => {
  return (
    <section className="content-two">
      <Content
        img={ContentTwoImg}
        reverse={true}
        name="Our Feature"
        title={`All payments are \nlinked to your Financy account`}
        description="Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. "
        hasButton={true}
        linkButton="https://www.google.com/"
      />
    </section>
  );
};

export default ContentTwo;
