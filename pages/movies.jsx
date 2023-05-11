import Head from 'next/head';
import MovieTile from '../src/components/MovieTile';
import ContentfulApi from '../utils/ContentfulApi';

export async function getStaticProps() {
    const movies = await ContentfulApi.getMovieReviews();
  
    return {
        props: {
            movies
        }
    };
}

const Movies = ({movies}) => {
    return (
        <>
        <Head>
            <title>Schroeder Zine - Movies</title>
        </Head>
        <section className="container">
            <h1>MOVIE REVIEWS</h1>
            <ul className="tiles-list">
                {movies.map((movie, index) => (
                    <li key={index}>
                        <MovieTile movie={movie} />
                    </li>
                ))}
            </ul>
        </section>
        </>
    )
}

export default Movies;