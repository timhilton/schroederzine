import MovieTile from '../src/components/MovieTile';
import ContentfulApi from '../utils/ContentfulApi';

export async function getStaticProps() {
    const movieReviewsList = await ContentfulApi.getMovieReviews();
  
    return {
        props: {
            movies: movieReviewsList
        }
    };
}

const Movies = ({movies}) => {
    const movieReviewsList = [];

    for (let i = 0; i < movies.length; i++) {
        movieReviewsList.push(
            <li key={i}>
                <MovieTile movie={movies[i]} key={i}/>
            </li>
        )        
    }
    return (
        <section className="container">
            <h1>MOVIE REVIEWS</h1>
            <ul className="tiles-list">
            {movieReviewsList}
            </ul>
        </section>
    )
}

export default Movies;