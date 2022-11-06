import React from 'react';
import Content from '../../components/Content';
import ContentThreeImg from '../../assign/content-three/img.png';
const ContentThree = () => {
  return (
    <section className="content-three">
      <Content
        img={ContentThreeImg}
        reverse={true}
        name="Our Feature"
        title={`All payments are \nlinked to your Financy
        account`}
        description="Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. "
        hasButton={true}
        linkButton="https://www.google.com/"
      />
    </section>
  );
};

export default ContentThree;
