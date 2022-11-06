import { PropsContentFeature } from '../type';

const ContentFeature = ({
  name,
  title,
  description,
  hasButton,
  linkButton,
}: PropsContentFeature) => {
  return (
    <div className="container-content">
      <h3 className="container-content-name">{name}</h3>
      <h4 className="container-content-title">{title}</h4>
      <p className="container-content-description">{description}</p>
      {hasButton && (
        <a className="container-content-link btn btn-default" href={linkButton}>
          Get Started
        </a>
      )}
    </div>
  );
};

export default ContentFeature;
