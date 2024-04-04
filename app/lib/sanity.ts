import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    projectId:"4qkomclu",
    dataset:"production",
    apiVersion:"2022-03-25",
    useCdn:true,
});

// sanity doesn't give us an image , it only gives us id:
// we make use of sanity image builder : @sanity/image-url

const builder = imageUrlBuilder(client);

export function urlFor(source:any){
    return builder.image(source);
}


