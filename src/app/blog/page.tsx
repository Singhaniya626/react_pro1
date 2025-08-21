import Image from 'next/image';

// Yeh type aapke blog post ke structure ke hisaab se define karo
type BlogPost = {
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
    }>;
  };
};

async function getBlogsWithImages() {
  const res = await fetch('https://1solutions.biz/wp-json/wp/v2/posts?_embed');
  return res.json();
}

export default async function BlogPage() {
  const blogs: BlogPost[] = await getBlogsWithImages(); // Yahan type specify karo

  return (
    <div className="p-4 grid md:grid-cols-3 gap-4">
      {blogs.map((post) => ( // Ab koi any error nahi ayega
        <a key={post.id} href={`/blog/${post.slug}`} className="border p-4 block hover:shadow-lg transition-shadow">
          {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
            <div className="w-full h-48 relative mb-4">
              <Image 
                src={post._embedded['wp:featuredmedia'][0].source_url} 
                alt={post.title.rendered}
                fill
                className="object-cover"
              />
            </div>
          )}
          
          <h2 className="font-bold text-lg mb-2">{post.title.rendered}</h2>
          <div 
            className="text-gray-600 line-clamp-3" 
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} 
          />
        </a>
      ))}
    </div>
  );
}