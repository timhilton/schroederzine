import {documentToReactComponents} from '@contentful/rich-text-react-renderer';
import ContentfulApi from '../utils/ContentfulApi';

export async function getStaticProps() {
    const aboutContent = await ContentfulApi.getAboutContent();
  
    return {
        props: {
            aboutCollection: aboutContent
        }
    };
}

const About = ({aboutCollection}) => {
    return (
        <section className="container about">
            <h2>{aboutCollection.title}</h2>
            {documentToReactComponents(aboutCollection.desc.json)}
        </section>
    )
}

export default About;