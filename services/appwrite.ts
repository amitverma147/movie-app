import { Client, Databases, Query } from "react-native-appwrite";
const DATABSE_ID = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!;
const COLLECTION_ID = process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID!;
const PROJECT_ID = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!;
const ENDPOINT = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!;

const client = new Client().setEndpoint(ENDPOINT).setProject(PROJECT_ID);

const databases = new Databases(client);

export const updateSearchCount = async (query: string, movie: Movie) => {
  const result = await databases.listDocuments(DATABSE_ID, COLLECTION_ID, [
    Query.equal("searchTerm", query),
  ]);
  console.log(result);
};
