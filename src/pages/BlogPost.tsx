import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="container py-24 text-center">
          <h1 className="text-4xl font-bold">Article not found</h1>
          <p className="mt-4 text-muted-foreground">
            We couldn't find that post. Browse the blog for the latest insights.
          </p>
          <div className="mt-8">
            <Button variant="hero" size="lg" asChild>
              <Link to="/blog">Back to Blog</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container mx-auto max-w-5xl py-24 px-4 sm:px-6">
        <div className="max-w-3xl space-y-6 mx-auto">
          <div className="text-sm uppercase tracking-[0.35em] text-accent">Blog post</div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{post.title}</h1>
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{post.date} · {post.readingTime}</p>
          <img src={post.image} alt={post.title} className="mt-6 w-full rounded-[2rem] object-cover shadow-xl" />
          <p className="text-lg leading-8 text-muted-foreground">{post.intro}</p>
          {post.paragraphs.map((paragraph, index) => (
            <p key={index} className="text-base leading-8 text-muted-foreground">
              {paragraph}
            </p>
          ))}
          <div className="rounded-3xl border border-border bg-secondary/80 p-6 text-sm text-foreground">
            <h2 className="mb-4 text-xl font-semibold">Key takeaways</h2>
            <ul className="space-y-3 pl-5 text-muted-foreground">
              {post.keyPoints.map((point, index) => (
                <li key={index} className="list-disc">{point}</li>
              ))}
            </ul>
          </div>
          <div className="mt-10">
            <Button variant="outline" size="lg" asChild>
              <Link to="/blog">Back to Blog</Link>
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
