import Head from "next/head";
import ArticleTile from "../src/components/ArticleTile";
import ContentfulApi from "../utils/ContentfulApi";

export async function getStaticProps() {
  const satireList = await ContentfulApi.getArticles('satirical');

  return {
    props: {
      satireArticles: satireList,
    },
  };
}

const SatireArticles = ({ satireArticles }) => {
  const sortedArticles = [...satireArticles].sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  return (
    <>
      <Head>
        <title>Schroeder Zine - Articles</title>
      </Head>
      <section className="container">
        <h1>SATIRICAL ARTICLES</h1>
        <ul className="tiles-list">
          {sortedArticles.map((satireArticles, index) => (
            <li key={index}>
              <ArticleTile article={satireArticles} dir="satire"/>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default SatireArticles;
