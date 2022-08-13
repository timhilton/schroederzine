import Article from '../../src/components/Article';
import ContentfulApi from '../../utils/ContentfulApi';

const ArticlePage = ({article}) => {
    return (
        <Article article={article}/>
    )
}

ArticlePage.getInitialProps = async (ctx) => {
    const { id } = ctx.query;
    const res = await ContentfulApi.getArticles();
    const title = id.split('-').join(' ');
    const item = res.filter((res) => res.title.toLowerCase() === title);
    return { article: item[0] };
}

export default ArticlePage;