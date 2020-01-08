import sanityClient from '@sanity/client';
import imageUrlBuilder from "@sanity/image-url";

const client =
    sanityClient({
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        useCdn: process.env.SANITY_USE_CDN
    });


const urlBuilder = imageUrlBuilder(client);

function urlFor(source) {
    return urlBuilder.image(source)
}

export {urlFor, client}

