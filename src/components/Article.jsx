import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import dateParser from '../../utils/dateParser';
import Head from 'next/head';

const Article = ({article}) => {
    const {title, subHeading, mediaCollection, copy, date, legacy, author, hasHeader} = article;
    const images = [];
    const media = mediaCollection.items;
    let start = hasHeader ? 1 : 0;
    let heroImage;
    if (hasHeader) {
        heroImage = media[0];
    }

    for (let i = start; i < media.length; i++) {
        images.push(
            <img src={media[i].url} key={i}/>
        )   
    }

    let newDate = dateParser(date, legacy);
    let pageName = `Schroeder Zine - ${title}`;

    return (
        <>
        <Head>
            <title>{pageName}</title>
        </Head>
        <section className="container article-container">
            <h1>{title}</h1>
            <h3>{subHeading}</h3>
            <p className="date">{newDate}{author && <span> - {author}</span>}</p>
            { hasHeader && 
            <img className="hero-image" src={heroImage.url}/>
            }
            { copy && 
            documentToReactComponents(copy.json)
}
            {mediaCollection.items.length > 0 && 
            <div className="images-container">
                {images}
            </div>
            } 
        </section>
        </>
    )
}

export default Article;

