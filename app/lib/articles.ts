// lib/articles.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Points to the folder where the articles are located
const articlesDirectory = path.join(process.cwd(), "/app/contents/articles");

export function getAllArticles() {
  // Read all file names in the articles folder
  const fileNames = fs.readdirSync(articlesDirectory);

  const allArticlesData = fileNames.map((fileName) => {
    // Remove ".mdx" from the file name to use as slug
    const slug = fileName.replace(/\.mdx$/, "");

    // Read the mdx file as a string
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to separate frontmatter from content
    const matterResult = matter(fileContents);

    // Return the slug and frontmatter data
    return {
      slug,
      ...(matterResult.data as {
        title: string;
        date: string;
        summary: string;
      }),
    };
  });

  // Sort articles by date, newest first
  return allArticlesData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1;
    } else {
      return -1;
    }
  });
}

export async function getArticleBySlug(slug: string) {
  const fullPath = path.join(articlesDirectory, `${slug}.mdx`);
  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    
    // Use gray-matter to extract frontmatter (data) and main content (content)
    return {
        frontmatter: data,
        content,
    };
  } catch (error) {
    return error;
  }
}