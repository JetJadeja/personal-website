export interface IArticle {
  slug: string;
  title: string;
  date: string; // e.g. "2024-01-05" (ISO or any format you prefer)
  readingTime: string; // e.g. "5 min read"
  markdownPath: string; // path to the .md file
}

// Add new articles here, ensuring date sorting is possible
const articlesData: IArticle[] = [
  {
    slug: "first-article",
    title: "Lorem Ipsum Overview",
    date: "2024-01-05",
    readingTime: "7 min read",
    markdownPath: "/src/writing/FirstArticle.md"
  }
  // Add more articles as needed
];

export default articlesData;