import Article from '../../src/components/Article';
import ContentfulApi from '../../utils/ContentfulApi';

const ArticlePage = ({article}) => {
    return (
        <Article article={article}/>
    )
}

export async function getStaticPaths() {
    const articleList = await ContentfulApi.getArticles();
    articleList.forEach((article) => {
        article.title = article.title.toLowerCase().replace(' ', '-');
    })

    const paths = articleList.map((article) => ({
        params: { id: article.title }
    }))

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const {id} = params;
    const articleList = await ContentfulApi.getArticles();
    const title = id.replace('-', ' ');
    const item = articleList.filter((articleList) => articleList.title.toLowerCase() === title);

    return {
        props: {
            article: item[0]
        }
    };
}

export default ArticlePage;