export interface Post {
  filename: string;
  data: {
    title: string;
    date: Date;
    description: string;
    author: string;
    cover: string;
  };
  content: string;
}
