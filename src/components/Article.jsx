import {documentToReactComponents} from '@contentful/rich-text-react-renderer';

const Article = ({article}) => {
    const images = [];
    const media = article.mediaCollection.items;
    for (let i = 0; i < media.length; i++) {
        images.push(
            <img src={media[i].url} key={i}/>
        )        
    }
    return (
        <section className="container">
            <h1>{article.title}</h1>
            <h3>{article.subHeading}</h3>
            {documentToReactComponents(article.copy.json)}
            {images}
        </section>
    )
}

export default Article;