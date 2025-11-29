import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Mock data for blog posts
const journalPosts = [
  {
    id: "1",
    title: "The Art of Patience: Working with Oak",
    date: "2024-03-15",
    excerpt: "Why we wait for the wood to speak before we cut. A deep dive into our sourcing and drying process.",
    category: "Process",
  },
  {
    id: "2",
    title: "Studio Notes: April",
    date: "2024-04-02",
    excerpt: "New tools, new sketches, and the smell of fresh sawdust in the morning.",
    category: "Studio",
  },
  {
    id: "3",
    title: "Maintenance Guide: Oil Finishes",
    date: "2024-02-28",
    excerpt: "How to keep your furniture looking alive for decades. Simple steps for daily care.",
    category: "Guide",
  },
];

export default function Home() {
  return (
    <div className="pt-32 pb-12 px-4 md:px-8 max-w-5xl mx-auto">
      {/* Manifesto / Intro */}
      <section className="mb-32">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-[0.9] mb-12">
          Sandalpaengi <br />
          Woodworking <br />
          Studio.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <p className="text-lg md:text-xl font-medium leading-relaxed">
            We build objects that last. <br />
            Honest materials, simple forms, <br />
            and a dedication to the craft.
          </p>
          <div className="font-mono text-sm text-gray-500 space-y-4">
            <p>EST. 2024 — SEOUL, KR</p>
            <p className="max-w-xs">
              We believe in the slow process of creation.
              Every piece is unique, numbered, and documented.
            </p>
          </div>
        </div>
      </section>

      {/* Journal Section */}
      <section>
        <div className="flex justify-between items-end mb-8 border-b border-black pb-4">
          <h2 className="text-2xl font-bold tracking-tight">Journal</h2>
          <Link href="/blog" className="font-mono text-sm hover:underline flex items-center gap-1">
            View Archive <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {journalPosts.map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="group block">
              <article className="grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline py-4 border-b border-gray-100 group-hover:border-gray-300 transition-colors">
                <div className="md:col-span-2 font-mono text-xs text-gray-400">
                  {post.date}
                </div>
                <div className="md:col-span-7">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:underline decoration-1 underline-offset-4">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                <div className="md:col-span-3 text-right md:text-right font-mono text-xs uppercase tracking-wider text-gray-400">
                  {post.category}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
