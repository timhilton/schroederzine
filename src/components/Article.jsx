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
    if (article.mediaCollection.items.length !== 0) {
        return (
            <section className="container article-container">
                <h1>{article.title}</h1>
                <h3>{article.subHeading}</h3>
                <img className="hero-image" src={heroImage.url}/>
                {documentToReactComponents(article.copy.json)}
                <div className="images-container">
                    {images}
                </div>
            </section>
        )
    } else {
        return (
            <section className="container article-container">
                <h1>{article.title}</h1>
                <h3>{article.subHeading}</h3>
                {documentToReactComponents(article.copy.json)}
            </section>
        ) 
    }
}

export default Article;