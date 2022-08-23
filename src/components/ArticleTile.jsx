import Link from "next/link";
import dateParser from "../../utils/dateParser";

const ArticleTile = ({article}) => {
    const {title, subHeading, mediaCollection, date, legacy} = article;
    const slug = title.split(' ').join('-').toLowerCase();
    const path = `/articles/${slug}`;
    const image = mediaCollection.items[0];

    let newDate = dateParser(date, legacy);

    return (
        <Link href={path}>
            <a>
                <div className={image ? "tile tile-image" : "tile tile-text"}>
                    {image && 
                    <img src={image.url} alt={image.fileName}/>
                    }
                    <div className="tile-headline">
                        <p className="tile-date">{newDate}</p>
                        <h3>{title}</h3>
                        <h4>{subHeading}</h4>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default ArticleTile;
