import { createClient } from "contentful";

const client = createClient({
  space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
  environment: import.meta.env.VITE_CONTENTFUL_ENVIRONMENT,
});

export const getSpaceEntries = async (contentType: string) => {
  try {
    const entries = await client.getEntries({ content_type: contentType });
    console.log(entries);
    return null;
  } catch (error) {
    console.log(error);
  }
};
