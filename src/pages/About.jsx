import {documentToReactComponents} from '@contentful/rich-text-react-renderer';

const About = ({about}) => {
    return (
        <section className="container about">
            <h2>{about.title}</h2>
            {documentToReactComponents(about.desc.json)}
        </section>
    )
}

export default About;