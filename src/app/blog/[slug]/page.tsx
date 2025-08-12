async function getSingleBlog(slug: string) {
    const res = await fetch(`https://1solutions.biz/wp-json/wp/v2/posts?slug=${slug}`);
    const data = await res.json();
    return data[0];
  }

  export default async function SingleBlogPage({ params }: { params: { slug: string } }) {
    const post = await getSingleBlog(params.slug);
  
    return (
      <div className="p-4">
        <h1 className="text-3xl font-bold">{post.title.rendered}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      </div>
    );
  }
  