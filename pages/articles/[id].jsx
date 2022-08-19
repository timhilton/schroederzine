import Article from '../../src/components/Article';
import ContentfulApi from '../../utils/ContentfulApi';

const ArticlePage = ({article}) => {
    return (
        <Article article={article}/>
    )
}

export async function getStaticPaths() {
    const articleList = await ContentfulApi.getArticles();

    const paths = articleList.map((article) => ({
        params: { id: article.title.toLowerCase().replaceAll(' ', '-') }
    }))

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const {id} = params;
    let articleList = await ContentfulApi.getArticles();

    let slug = id.replaceAll('-', ' ');

    let item = articleList.filter((article) => article.title.toLowerCase() === slug)[0];

    return {
        props: {
            article: item
        }
    };
}

export default ArticlePage;