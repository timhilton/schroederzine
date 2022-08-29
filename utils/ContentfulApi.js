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

    static async getArticles() {
        const query = `
        {
            articleCollection {
                items {
                    title,
                    subHeading,
                    copy {
                        json
                    },
                    mediaCollection {
                        items {
                            fileName,
                            url,
                            description
                        }
                    },
                    date,
                    legacy,
                    author,
                    hasHeader
                }
            }
        }`

        const response = await this.callContentful(query);
        let articles = response.data.articleCollection.items;

        return articles;
    }

    static async getMusicReviews() {
        const query = `
        {
            musicCollection {
                items {
                    album,
                    artist,
                    label,
                    links,
                    copy {
                        json
                    },
                    author,
                    artwork {
                        url
                        title
                    }
                }
            }
        }`

        const response = await this.callContentful(query);
        const musicReviews = response.data.musicCollection.items;

        return musicReviews;
    }

    static async getMovieReviews() {
        const query = `
        {
            moviesCollection {
              items {
                    title,
                    director,
                    actors,
                    link,
                    copy {
                        json
                    },
                    poster {
                        url,
                        title
                    }
                }
            }
        }`;

        const response = await this.callContentful(query);
        const movieReviews = response.data.moviesCollection.items;

        return movieReviews;
    }
}