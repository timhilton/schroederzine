export default class ContentfulApi {
    // setup static contentful API call
    static async callContentful(query) {
        const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_SPACE_ID}`;

        const fetchOptions = {
        method: "POST",
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_CDI}`,
            "Content-Type": "application/json",
        },
            body: JSON.stringify({ query }),
        };

        try {
            const data = await fetch(fetchUrl, fetchOptions).then((response) =>
                response.json(),
            );
            return data;
        } catch (error) {
            throw new Error("Could not fetch data from Contentful!");
        }
    }

    // get the About Content - you can then call this in the getStaticProps function on the about page...
    static async getAboutContent() {
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
        }`

        const response = await this.callContentful(query);
        const aboutContent = response.data.aboutCollection.items[0];

        return aboutContent;
    }
}