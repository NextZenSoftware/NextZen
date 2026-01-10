import { Section } from "@/components/layout/Section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { Calendar, User } from "lucide-react"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog - NextzenSoftware | nextzensoftware - Tech Insights & News",
  description: "Read insights, tutorials, and news from NextzenSoftware (nextzensoftware) expert team. Learn about web development, cloud solutions, SaaS, digital transformation, and modern technology trends. Stay updated with latest IT industry news.",
  keywords: ["nextzensoftware", "NextzenSoftware", "blog", "tech blog", "IT insights", "web development blog", "cloud solutions blog", "digital transformation", "technology news", "nextzen blog"],
  alternates: {
    canonical: 'https://www.nextzensoftware.com/blog',
  },
  openGraph: {
    title: "Blog - NextzenSoftware | nextzensoftware",
    description: "Insights, tutorials, and news from NextzenSoftware (nextzensoftware) expert team on web development, cloud solutions, and digital transformation.",
    url: "https://www.nextzensoftware.com/blog",
    siteName: "NextzenSoftware",
  },
}

const posts = [
  {
    title: "10 Best Practices for Cloud Migration in 2024",
    excerpt: "Moving to the cloud? Avoid common pitfalls with our comprehensive guide to a successful AWS/Azure migration.",
    date: "Dec 10, 2023",
    author: "Alex Turner",
    category: "Cloud",
  },
  {
    title: "Why Next.js is the Future of Web Development",
    excerpt: "Explore the benefits of server-side rendering, static site generation, and the App Router architecture.",
    date: "Nov 28, 2023",
    author: "Sarah Jenkins",
    category: "Development",
  },
  {
    title: "Securing Your Defenses: A Guide to Modern Cybersecurity",
    excerpt: "Learn how to protect your business from evolving cyber threats with zero-trust architecture.",
    date: "Nov 15, 2023",
    author: "Mike Ross",
    category: "Security",
  },
]

export default function BlogPage() {
  return (
    <>
      <Section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Insights & News
          </h1>
          <p className="text-xl text-slate-600">
            Expert perspectives on technology, business, and innovation.
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Link key={index} href={`/blog/post-${index + 1}`} className="group h-full"> 
            {/* Note: Dynamic routes not implemented yet, using placeholder links */}
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-slate-200 group-hover:border-primary-200">
                <div className="aspect-video bg-slate-100 w-full mb-4 rounded-t-2xl" /> 
                {/* Image placeholder above */}
                <CardHeader className="pb-2">
                  <div className="text-xs font-semibold text-primary-600 mb-2 uppercase tracking-wide">
                    {post.category}
                  </div>
                  <CardTitle className="group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <p className="text-slate-600 mb-6 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <User size={14} /> {post.author}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </>
  )
}
