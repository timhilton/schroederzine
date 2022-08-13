import Link from "next/link";

const ArticleTile = ({article}) => {
    const {title, subHeading, mediaCollection} = article;
    const slug = title.split(' ').join('-').toLowerCase();
    const path = `/articles/${slug}`;
    const image = mediaCollection.items[0];

    if (image) {
        return (
            <Link href={path}>
                <a>
                    <img src={image.url} alt={image.fileName}/>
                    <h3>{title}</h3>
                    <h4>{subHeading}</h4>
                </a>
            </Link>
        )
    } else {
        return (
            <Link href={path}>
                <a>
                    <h3>{title}</h3>
                    <h4>{subHeading}</h4>
                </a>
            </Link>
        )
    }
}

export default ArticleTile;
