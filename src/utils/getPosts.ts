import posts from "~/data/posts.json";
import { Article } from "~/types";

export const getAllPosts = async (): Promise<Article[]> => {
  return posts;
};

export const getPostBySlug = async (
  slug: string
): Promise<Article | undefined> => {
  return posts.find((post) => post.slug === slug);
};

export const getAllSlugs = async (): Promise<string[]> => {
  return posts.map((post) => post.slug);
};
