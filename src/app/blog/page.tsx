async function getBlogs() {
    const res = await fetch('https://example.com/wp-json/wp/v2/posts');
    return res.json();
  }
  
  export default async function BlogPage() {
    const blogs = await getBlogs();
  
    return (
      <div className="p-4 grid md:grid-cols-3 gap-4">
        {blogs.map((post: any) => (
          <a key={post.id} href={`/blog/${post.slug}`} className="border p-4">
            <h2 className="font-bold">{post.title.rendered}</h2>
            <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
          </a>
        ))}
      </div>
    );
  }
  