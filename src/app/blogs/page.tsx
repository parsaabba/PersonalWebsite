import { blogData } from "@/lib/data";
import { BlogCard } from "@/components/BlogCard";

export default function BlogsPage() {
  return (
    <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">My Writing</h1>
      <p className="text-gray-600 dark:text-slate-400 mb-12">Thoughts on engineering, code, and university life.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogData.map((blog, i) => (
          <BlogCard key={i} item={blog} />
        ))}
      </div>
    </main>
  );
}
