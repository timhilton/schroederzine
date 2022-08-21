import Head from 'next/head';
import MusicTile from '../src/components/MusicTile';
import ContentfulApi from '../utils/ContentfulApi';

export async function getStaticProps() {
    const musicReviewsList = await ContentfulApi.getMusicReviews();
  
    return {
        props: {
            music: musicReviewsList
        }
    };
}

const Music = ({music}) => {
    const musicReviewsList = []

    for (let i = 0; i < music.length; i++) {
        musicReviewsList.push(
            <li key={i}>
                <MusicTile music={music[i]} key={i}/>
            </li>
        )        
    }

    return (
        <>
        <Head>
            <title>Schroeder Zine - Music</title>
        </Head>
        <section className="container">
            <h1>MUSIC REVIEWS</h1>
            <ul className="tiles-list">
            {musicReviewsList}
            </ul>
        </section>
        </>
    )
}

export default Music;
