import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Calendar, Clock, User, ArrowLeft } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string | string[] } | Promise<{ slug: string | string[] }>;
}) {
  const resolvedParams = await params;
  const slug = Array.isArray(resolvedParams.slug)
    ? resolvedParams.slug[0]
    : resolvedParams.slug;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Article Header */}
      <article className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Button asChild variant="ghost" className="mb-6">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>

            <div className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
              {post.category}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary text-balance">
              {post.title}
            </h1>

            <div className="flex flex-wrap gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <div className="relative aspect-video mb-12 overflow-hidden rounded-lg">
              <img
                src={post.imageUrl || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {post.content}
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-primary">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts
                .filter((p) => p.id !== post.id && p.category === post.category)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Card
                    key={relatedPost.id}
                    className="transition-all hover:shadow-lg"
                  >
                    <CardContent className="p-6">
                      <div className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium mb-3">
                        {relatedPost.category}
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-primary hover:text-secondary transition-colors">
                        <Link href={`/blog/${relatedPost.slug}`}>
                          {relatedPost.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {relatedPost.excerpt}
                      </p>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
