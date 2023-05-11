import Head from 'next/head';
import MusicTile from '../src/components/MusicTile';
import ContentfulApi from '../utils/ContentfulApi';

export async function getStaticProps() {
    const musicReviewsList = await ContentfulApi.getMusicReviews();

    return {
        props: {
            musicReviewsList
        }
    };
}

const Music = ({ musicReviewsList }) => {
    return (
        <>
            <Head>
                <title>Schroeder Zine - Music</title>
            </Head>
            <section className="container">
                <h1>MUSIC REVIEWS</h1>
                <ul className="tiles-list">
                    {musicReviewsList.map((music, index) => (
                        <li key={index}>
                            <MusicTile music={music} />
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
};

export default Music;
