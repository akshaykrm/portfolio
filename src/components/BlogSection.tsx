import React, { useState, useMemo } from "react";
import { Search, Calendar, Clock, ArrowLeft, BookOpen } from "lucide-react";
import { BlogPost } from "../types";
import { MarkdownRenderer } from "./MarkdownRenderer";

interface BlogSectionProps {
  posts: BlogPost[];
}

export function BlogSection({ posts }: BlogSectionProps) {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    posts.forEach((post) => post.tags.forEach((tag) => tagsSet.add(tag)));
    return Array.from(tagsSet);
  }, [posts]);

  // Filter posts based on search query and selected tag
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.content.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesTag = selectedTag ? post.tags.includes(selectedTag) : true;
      
      return matchesSearch && matchesTag;
    });
  }, [posts, searchQuery, selectedTag]);

  const handleSelectPost = (post: BlogPost) => {
    setSelectedPost(post);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToList = () => {
    setSelectedPost(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (selectedPost) {
    return (
      <article id={`blog-view-${selectedPost.slug}`} className="py-8 animate-fadeIn">
        {/* Navigation & Header */}
        <button
          id="back-to-blogs-btn"
          onClick={handleBackToList}
          className="group inline-flex items-center space-x-2 text-sm font-mono text-sand-500 dark:text-sand-400 hover:text-black dark:hover:text-white transition-colors mb-8 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Articles</span>
        </button>

        {/* Post Metadata */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-y-2 gap-x-4 text-xs font-mono text-sand-400 dark:text-sand-500 mb-3">
            <span className="flex items-center">
              <Calendar className="w-3.5 h-3.5 mr-1.5" />
              {selectedPost.date}
            </span>
            <span className="flex items-center">
              <Clock className="w-3.5 h-3.5 mr-1.5" />
              {selectedPost.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-mono font-bold text-sand-950 dark:text-sand-50 tracking-tight leading-tight mb-4">
            {selectedPost.title}
          </h1>

          <div className="flex flex-wrap gap-2">
            {selectedPost.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center text-xs font-mono bg-sand-200 dark:bg-sand-800 text-sand-700 dark:text-sand-300 px-2.5 py-0.5 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Markdown Content */}
        <div className="prose dark:prose-invert max-w-none mt-8">
          <MarkdownRenderer markdown={selectedPost.content} />
        </div>

        {/* Post Footer */}
        <div className="mt-16 pt-8 border-t border-sand-200 dark:border-sand-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="text-sm text-sand-500 dark:text-sand-400">
            Thanks for reading! Feel free to share or discuss this post with me.
          </div>
          <button
            onClick={handleBackToList}
            className="text-xs font-mono text-amber-500 hover:underline cursor-pointer"
          >
            ← Back to all posts
          </button>
        </div>
      </article>
    );
  }

  return (
    <section id="blog-section" className="py-8">
      {/* Section Header */}
      <div className="flex items-center space-x-3 mb-8">
        <span className="text-xs font-mono px-2.5 py-1 rounded bg-[#e7e5e4] dark:bg-sand-800 text-sand-700 dark:text-sand-300 font-semibold uppercase tracking-wider">
          Writings
        </span>
        <h2 className="text-2xl sm:text-3xl font-mono font-bold text-sand-900 dark:text-sand-50">
          Personal Blog
        </h2>
      </div>

      {/* Filters & Search Toolbar */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-sand-400 dark:text-sand-500" />
          <input
            id="blog-search-input"
            type="text"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-sm rounded-lg border border-sand-200 dark:border-sand-800 bg-white dark:bg-sand-900/40 text-sand-800 dark:text-sand-100 placeholder-sand-400 dark:placeholder-sand-500 focus:outline-none focus:ring-2 focus:ring-sand-400/50 focus:border-sand-400 transition-all"
          />
        </div>

        <div className="flex flex-wrap gap-1.5 items-center">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-3 py-1.5 text-xs font-mono rounded-md transition-all cursor-pointer ${
              selectedTag === null
                ? "bg-sand-900 dark:bg-sand-100 text-white dark:text-sand-900 font-medium"
                : "bg-sand-200/60 dark:bg-sand-800/60 text-sand-600 dark:text-sand-400 hover:bg-sand-200 dark:hover:bg-sand-800"
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
              className={`px-3 py-1.5 text-xs font-mono rounded-md transition-all cursor-pointer ${
                tag === selectedTag
                  ? "bg-sand-900 dark:bg-sand-100 text-white dark:text-sand-900 font-medium"
                  : "bg-sand-200/60 dark:bg-sand-800/60 text-sand-600 dark:text-sand-400 hover:bg-sand-200 dark:hover:bg-sand-800"
              }`}
            >
              #{tag}
            </button>
          ))}
        </div>
      </div>

      {/* Blog List Grid */}
      {filteredPosts.length === 0 ? (
        <div className="text-center py-12 border border-dashed border-sand-200 dark:border-sand-800 rounded-xl p-8 bg-sand-50/50 dark:bg-sand-900/20">
          <BookOpen className="w-8 h-8 mx-auto text-sand-300 dark:text-sand-700 mb-3" />
          <p className="text-sm text-sand-500 dark:text-sand-400">
            No articles found matching your criteria.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedTag(null);
            }}
            className="mt-4 text-xs font-mono text-sand-500 hover:underline"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredPosts.map((post) => (
            <div
              key={post.id}
              id={`blog-item-${post.slug}`}
              onClick={() => handleSelectPost(post)}
              className="group flex flex-col md:flex-row md:items-center justify-between p-6 rounded-xl border border-sand-200 dark:border-sand-800 bg-white/40 dark:bg-sand-900/20 hover:bg-white dark:hover:bg-sand-900/60 transition-all duration-300 hover:border-sand-300 dark:hover:border-sand-700 hover:shadow-sm cursor-pointer"
            >
              <div className="flex-grow pr-0 md:pr-8">
                <div className="flex items-center gap-x-3 text-[11px] font-mono text-sand-400 dark:text-sand-500 mb-2">
                  <span className="flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {post.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-mono font-bold text-sand-900 dark:text-sand-50 group-hover:text-amber-500 dark:group-hover:text-amber-400 transition-colors leading-snug mb-2">
                  {post.title}
                </h3>

                <p className="text-sm text-sand-500 dark:text-sand-400 line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex flex-wrap md:flex-col items-start gap-1.5 mt-4 md:mt-0 shrink-0">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center text-[10px] font-mono bg-sand-100 dark:bg-sand-800/80 text-sand-500 dark:text-sand-400 border border-sand-200 dark:border-sand-800 px-2 py-0.5 rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
