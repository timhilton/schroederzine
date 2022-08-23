import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import dateParser from '../../utils/dateParser';
import Head from 'next/head';

const Article = ({article}) => {
    const {title, subHeading, mediaCollection, copy, date, legacy, author} = article;
    const images = [];
    const media = mediaCollection.items;
    const heroImage = media[0];
    for (let i = 1; i < media.length; i++) {
        images.push(
            <img src={media[i].url} key={i}/>
        )   
    }

    let newDate = dateParser(date, legacy);

    return (
        <>
        <Head>
            <title>Schroeder Zine - {title}</title>
        </Head>
        <section className="container article-container">
            <h1>{title}</h1>
            <h3>{subHeading}</h3>
            <p className="date">{newDate}{author && <span> - {author}</span>}</p>
            {mediaCollection.items.length > 0 && 
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

