import Link from "next/link";
import dateParser from "../../utils/dateParser";

const ArticleTile = ({ article }) => {
  const { title, subHeading, mediaCollection, date, legacy } = article;
  const slug = title.toLowerCase().split(' ').join('-');
  const path = `/articles/${slug}`;
  const [image] = mediaCollection.items;

  const newDate = dateParser(date, legacy);

  return (
    <Link href={path}>
      <a>
        <div className={`tile ${image ? 'tile-image' : 'tile-text'}`}>
          {image && <img src={image.url} alt={image.fileName} />}
          <div className="tile-headline">
            <p className="tile-date">{newDate}</p>
            <h3>{title}</h3>
            <h4>{subHeading}</h4>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ArticleTile;
