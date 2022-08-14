import Link from "next/link";
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';

const MovieTile = ({movie}) => {
    const {title, director, actors, link, copy, poster} = movie;

    return (
        <div className="tile tile-movie-review">
            <div className="tile-movie">
                <img src={poster.url} alt={poster.title}/>
                <div className="tile-headline">
                    <h3>{title}</h3>
                    { director !== null &&
                        <h4 className="artist"><strong>Director:</strong> {director}</h4>
                    }
                    {actors !== null &&
                        <h4><strong>Actors:</strong> {actors}</h4>
                    }
                    {link !== null &&
                        <Link href={link}>
                            <a>
                                Watch
                            </a>
                        </Link>
                    }
                </div>
            </div>
            <div className="tile-review">
                {documentToReactComponents(copy.json)}
            </div>
        </div>
    )
}

export default MovieTile;