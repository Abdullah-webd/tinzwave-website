export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  author: string
  date: string
  readTime: string
  imageUrl: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of AI in African Tech Ecosystem",
    slug: "future-ai-african-tech",
    excerpt:
      "Exploring how artificial intelligence is transforming businesses across Africa and creating new opportunities for innovation.",
    content:
      "Artificial intelligence is revolutionizing the African tech landscape, offering unprecedented opportunities for businesses to innovate and compete globally. From fintech to agriculture, AI applications are solving uniquely African challenges...",
    category: "AI & Technology",
    author: "Tinzwave Team",
    date: "2024-03-15",
    readTime: "5 min read",
    imageUrl: "/ai-technology-blog.jpg",
  },
  {
    id: "2",
    title: "Why Every Business Needs a Website in 2024",
    slug: "business-website-2024",
    excerpt:
      "Understanding the critical role of web presence for modern businesses and how to get started with your digital transformation.",
    content:
      "In today's digital-first world, having a professional website is no longer optional—it's essential. Whether you're a small business, church, or school, your online presence is often the first impression potential customers have...",
    category: "Web Development",
    author: "Tinzwave Team",
    date: "2024-03-10",
    readTime: "4 min read",
    imageUrl: "/business-website-blog.jpg",
  },
  {
    id: "3",
    title: "Top 10 Tech Skills to Learn in 2024",
    slug: "top-tech-skills-2024",
    excerpt:
      "A comprehensive guide to the most in-demand tech skills that can accelerate your career in the digital economy.",
    content:
      "The tech industry continues to evolve rapidly, creating exciting opportunities for those with the right skills. Based on current market trends and employer demand, here are the top 10 tech skills you should consider learning...",
    category: "Career Development",
    author: "Tinzwave Team",
    date: "2024-03-05",
    readTime: "7 min read",
    imageUrl: "/tech-skills-blog.jpg",
  },
  {
    id: "4",
    title: "Success Stories: From Student to Software Engineer",
    slug: "student-to-engineer-success",
    excerpt:
      "Inspiring stories of how our academy graduates transformed their careers and landed jobs at top tech companies.",
    content:
      "Meet Sarah Okonkwo, who went from complete beginner to fullstack developer in just 4 months through our intensive program. Her journey showcases the power of dedication, quality training, and mentorship...",
    category: "Success Stories",
    author: "Tinzwave Team",
    date: "2024-02-28",
    readTime: "6 min read",
    imageUrl: "/success-stories-blog.jpg",
  },
  {
    id: "5",
    title: "Mobile App Development: iOS vs Android",
    slug: "ios-vs-android-development",
    excerpt:
      "Comparing the two major mobile platforms and helping you decide which one to focus on for your app project.",
    content:
      "When planning a mobile app, one of the first decisions you'll face is choosing between iOS and Android—or building for both. Each platform has its own advantages, challenges, and development considerations...",
    category: "Mobile Development",
    author: "Tinzwave Team",
    date: "2024-02-20",
    readTime: "5 min read",
    imageUrl: "/mobile-development-blog.jpg",
  },
  {
    id: "6",
    title: "Digital Marketing Strategies for Small Businesses",
    slug: "digital-marketing-small-business",
    excerpt:
      "Practical, cost-effective digital marketing strategies that small businesses can implement to grow their online presence.",
    content:
      "Small businesses often face budget constraints when it comes to marketing. However, digital marketing offers numerous cost-effective strategies that can deliver impressive results. Here's what you need to know...",
    category: "Digital Marketing",
    author: "Tinzwave Team",
    date: "2024-02-15",
    readTime: "6 min read",
    imageUrl: "/digital-marketing-blog.jpg",
  },
]
