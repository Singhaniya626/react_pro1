async function getBlogsWithImages() {
    const res = await fetch('https://1solutions.biz/wp-json/wp/v2/posts?_embed');
    return res.json();
  }
  
  export default async function BlogPage() {
    const blogs = await getBlogsWithImages();
  
    return (
      <div className="p-4 grid md:grid-cols-3 gap-4">
        {blogs.map((post: any) => (
          <a key={post.id} href={`/blog/${post.slug}`} className="border p-4 block hover:shadow-lg transition-shadow">
            {post._embedded?.['wp:featuredmedia']?.[0]?.source_url && (
              <img 
                src={post._embedded['wp:featuredmedia'][0].source_url} 
                alt={post.title.rendered}
                className="w-full h-48 object-cover mb-4"
              />
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