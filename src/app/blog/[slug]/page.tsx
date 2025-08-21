import type { Metadata } from 'next';
import Image from 'next/image';

async function getSingleBlog(slug: string) {
  const res = await fetch(`https://1solutions.biz/wp-json/wp/v2/posts?slug=${slug}&_embed`);
  
  if (!res.ok) {
    throw new Error('Failed to fetch blog post');
  }
  
  const data = await res.json();
  return data[0];
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getSingleBlog(slug);
  
  return {
    title: post?.title?.rendered || 'Blog Post',
    description: post?.excerpt?.rendered?.replace(/<[^>]*>/g, '').slice(0, 160) || 'Read this blog post',
  };
}

export default async function SingleBlogPage({ params }: { params: Promise<{ slug: string }> }) {
  // Await the params promise
  const { slug } = await params;
  const post = await getSingleBlog(slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Post Not Found</h1>
          <p className="text-gray-600">The blog post you&apos;re looking for doesn&apos;t exist.</p>
        </div>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title.rendered}</h1>
        
        {/* Featured Image */}
        {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
          <div className="relative w-full h-64 md:h-96 mb-6">
            <Image
              src={post._embedded['wp:featuredmedia'][0].source_url}
              alt={post.title.rendered}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw"
            />
          </div>
        )}
      </header>

      {/* Content */}
      <div 
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }} 
      />

      {/* Footer */}
      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm text-gray-600">
          <span>Published on {new Date(post.date).toLocaleDateString()}</span>
          {/* Add author information if available */}
          {post._embedded?.author?.[0]?.name && (
            <span>By {post._embedded.author[0].name}</span>
          )}
        </div>
      </footer>
    </article>
  );
}