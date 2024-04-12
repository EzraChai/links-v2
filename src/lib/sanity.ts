import { createClient } from "next-sanity";
import { cache } from "react";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET as string;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION as string;

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

const clientFetch = cache(client.fetch.bind(client));

export { clientFetch };
