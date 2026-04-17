import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />

    <main className="container py-24">
      <div className="max-w-3xl space-y-6">
        <p className="text-sm uppercase tracking-[0.35em] text-accent">Blog</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Insights on product engineering, performance, and delivery.
        </h1>
        <p className="text-muted-foreground text-lg leading-8">
          Practical writing for teams and leaders who want cleaner architecture, faster builds, and deliverables that scale.
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-3xl border border-border bg-card p-4 text-sm">
            <p className="font-semibold">Architecture</p>
            <p className="text-muted-foreground">Build systems that stay maintainable as requirements grow.</p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-4 text-sm">
            <p className="font-semibold">Performance</p>
            <p className="text-muted-foreground">Optimize load time, API efficiency, and real-user experience.</p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-4 text-sm">
            <p className="font-semibold">Delivery</p>
            <p className="text-muted-foreground">Ship stable releases faster with better planning and feedback loops.</p>
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <article key={post.slug} className="overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-elegant">
            <img src={post.image} alt={post.title} className="h-48 sm:h-56 w-full object-cover" />
            <div className="p-6">
              <div className="mb-4 flex items-center justify-between text-sm text-muted-foreground">
                <span>Blog post</span>
                <span>{post.date} · {post.readingTime}</span>
              </div>
              <h2 className="mb-4 text-2xl font-semibold leading-tight text-foreground">{post.title}</h2>
              <p className="mb-6 text-sm leading-6 text-muted-foreground">{post.excerpt}</p>
              <Button variant="outline" size="sm" asChild>
                <Link to={`/blog/${post.slug}`}>Read article</Link>
              </Button>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20 rounded-3xl border border-border bg-card p-10 shadow-card">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-accent">Subscribe</p>
            <h2 className="mt-3 text-3xl font-bold">Get monthly product updates and tips.</h2>
          </div>
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">
              Reach out <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </main>

    <Footer />
  </div>
);

export default Blog;
