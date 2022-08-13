import { useState, useEffect } from "react";
import Layout from "../src/components/Layout";
import {documentToReactComponents} from '@contentful/rich-text-react-renderer';

const query = `
{
    aboutCollection {
        items {
            title,
            description,
            desc {
                json
            }
        }
    }
}
`
const About = ({about}) => {
    const [aboutCollection, setAboutCollection] = useState(null);

    useEffect(() => {
        window
            .fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_SPACE_ID}`, {
                method: "POST",
                headers: {
                    "content-Type": "application/json",
                    Authorization: `Bearer ${process.env.NEXT_PUBLIC_CDI}`
                },
                body: JSON.stringify({ query })
            })
            .then((response) => response.json())
            .then(({ data, errors}) => {
                if(errors) {
                    console.error(errors)
                }

                setAboutCollection(data.aboutCollection.items[0]);
            });
    }, []);

    if (!aboutCollection) {
        return "loading..."
    }
    return (
        <section className="container about">
            <h2>{aboutCollection.title}</h2>
            {documentToReactComponents(aboutCollection.desc.json)}
        </section>
    )
}

export default About;