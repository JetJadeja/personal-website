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
    slug: "01_accelerated_resilience",
    title: "Accelerated Resilience",
    date: "2024-03-19",
    readingTime: "1 min read",
    markdownPath: "01_accelerated_resilience",
  },
  // Add more articles as needed
];

export default articlesData;
