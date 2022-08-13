import ArticleTile from '../src/components/ArticleTile';
import ContentfulApi from '../utils/ContentfulApi';

export async function getStaticProps() {
    const articleList = await ContentfulApi.getArticles();
  
    return {
        props: {
            articles: articleList
        }
    };
}

const Articles = ({articles}) => {
    const articleList = [];

    for (let i = 0; i < articles.length; i++) {
        articleList.push(
            <ArticleTile article={articles[i]} key={i}/>
        )        
    }

    return (
        <section>
            <ul>
            {articleList}
            </ul>
        </section>
    )
}

export default Articles;