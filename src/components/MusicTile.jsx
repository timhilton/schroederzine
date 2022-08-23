import Link from "next/link";
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';

const MusicTile = ({music}) => {
    const {album, artist, label, links, copy, artwork, author} = music;

    return (
        <div className="tile tile-music-review">
            <div className="tile-music">
                <img src={artwork.url} alt={artwork.title}/>
                <div className="tile-headline">
                    <h3>{album}</h3>
                    <h4 className="artist">{artist}</h4>
                    {label !== null &&
                        <h4>{label}</h4>
                    }
                    {links !== null &&
                        <Link href={links}>
                            <a target="_blank" rel="noopener noreferrer">
                                Listen
                            </a>
                        </Link>
                    }
                </div>
            </div>
            <div className="tile-review">
                {documentToReactComponents(copy.json)}
                <p><small>Author: {author}</small></p>
            </div>
        </div>
    )
}

export default MusicTile;