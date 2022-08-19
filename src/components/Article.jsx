import {documentToReactComponents} from '@contentful/rich-text-react-renderer';

const Article = ({article}) => {
    const images = [];
    const media = article.mediaCollection.items;
    const heroImage = media[0];
    for (let i = 1; i < media.length; i++) {
        images.push(
            <img src={media[i].url} key={i}/>
        )   
    }

    return (
        <section className="container article-container">
            <h1>{article.title}</h1>
            <h3>{article.subHeading}</h3>
            {article.mediaCollection.items.length > 0 && 
            <img className="hero-image" src={heroImage.url}/>
            }
            { article.copy && 
            documentToReactComponents(article.copy.json)
}
            {article.mediaCollection.items.length > 0 && 
            <div className="images-container">
                {images}
            </div>
            } 
        </section>
    )
}

export default Article;

