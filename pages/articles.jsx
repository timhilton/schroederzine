import Head from 'next/head';
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
            <li key={i}>
                <ArticleTile article={articles[i]} key={i}/>
            </li>
        )        
    }

    return (
        <>
        <Head>
            <title>Schroeder Zine - Articles</title>
        </Head>
        <section className="container">
            <h1>ARTICLES</h1>
            <ul className="tiles-list">
            {articleList}
            </ul>
        </section>
        </>
    )
}

export default Articles;