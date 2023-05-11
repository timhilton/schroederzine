import Head from "next/head";
import ArticleTile from "../src/components/ArticleTile";
import ContentfulApi from "../utils/ContentfulApi";

export async function getStaticProps() {
  const articleList = await ContentfulApi.getArticles();

  return {
    props: {
      articles: articleList,
    },
  };
}

const Articles = ({ articles }) => {
  const sortedArticles = [...articles].sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <>
      <Head>
        <title>Schroeder Zine - Articles</title>
      </Head>
      <section className="container">
        <h1>ARTICLES</h1>
        <ul className="tiles-list">
          {sortedArticles.map((article, index) => (
            <li key={index}>
              <ArticleTile article={article} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Articles;
