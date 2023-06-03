import { createClient } from "next-sanity";
import { apiVersion, projectId, useCdn, dataset } from "../../sanity/env";
export const client = createClient({
  token: process.env.SANITY_ACCESS_TOKEN,
  apiVersion: "2023-05-31",
  dataset: "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: true,
});
