import Image from "next/image";

const PostPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/photos', {
    // cache: "force-cache"
    next: {
      revalidate: 5,
    }
  });
  const posts = await res.json();
  console.log(posts);

  return (
    <>
    <h1 className="text-xl font-semibold my-8"> In this api there are 5000 post , i just sliced them . and showed only 8 post </h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {posts.slice(0, 8).map(post => (
          <div key={post.id} className="card bg-base-100 shadow-xl">
            <figure className="overflow-hidden">
              <Image
                className="w-full h-48 object-cover"
                src={post.thumbnailUrl}
                alt={`Thumbnail for post ${post.id}`}
                width={400}
                height={200}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p>Description : (static ) this is static message there are no description in this API that i taken from jsonplaceholder</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="text-center  my-7">
        <button className="btn btn-accent text-white">Show more</button>
      </div> */}
    </>
  );
};

export default PostPage;
