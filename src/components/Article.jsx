import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import dateParser from '../../utils/dateParser';
import Head from 'next/head';

const HeroImage = ({ media }) => {
  if (!media) return null;

  return <img className="hero-image" src={media.url} alt={media.description} />;
};

const Article = ({ article }) => {
  const {
    title,
    subHeading,
    mediaCollection: { items: media = [] },
    copy,
    date,
    legacy,
    author,
    hasHeader,
  } = article;

  const images = media.slice(hasHeader ? 1 : 0).map((item, index) => (
    <figure key={index}>
      <img src={item.url} alt={item.description} />
      {item.description && <figcaption>{item.description}</figcaption>}
    </figure>
  ));

  const newDate = dateParser(date, legacy);
  const pageName = `Schroeder Zine - ${title}`;

  return (
    <>
      <Head>
        <title>{pageName}</title>
      </Head>
      <section className="container article-container">
        <h1>{title}</h1>
        <h3>{subHeading}</h3>
        <p className="date">
          {newDate}
          {author && <span> - {author}</span>}
        </p>
        <HeroImage media={media[0]} />
        {copy && documentToReactComponents(copy.json)}
        {media.length > 1 && (
          <div className={`images-container${hasHeader ? ' images-grid-container' : ''}`}>
            {images}
          </div>
        )}
      </section>
    </>
  );
};

export default Article;
