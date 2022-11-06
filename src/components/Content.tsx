import { PropsContentFeature } from '../type';
import ContentFeature from './ContentFeature';

interface PropsContent extends PropsContentFeature {
  img: string;
  reverse?: boolean;
}
const Content = ({
  img,
  reverse,
  name,
  title,
  description,
  hasButton,
  linkButton,
}: PropsContent) => {
  return (
    <div className={`content ${reverse && 'reverse'}`}>
      <a href={linkButton}>
        <img src={img} className="content-img" alt={'Feature' + name} />
      </a>
      <div className="content-text">
        <ContentFeature
          name={name}
          title={title}
          description={description}
          hasButton={hasButton}
          linkButton={linkButton}
        />
      </div>
    </div>
  );
};

export default Content;
