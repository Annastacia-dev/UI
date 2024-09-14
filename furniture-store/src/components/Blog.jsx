const blogs = [
  {
    title: "Top 10 Sofa Styles for Modern Living Rooms",
    content:
      "Explore the most popular sofa designs that blend comfort and style to create the perfect modern living space.",
    image: "/furniture/green-couch.jpeg",
    link: "/blog/top-10-sofa-styles",
  },
  {
    title: "How to Choose the Right Dining Table for Your Home",
    content:
      "A guide to selecting the perfect dining table for your home, balancing form, function, and aesthetics.",
    image: "/dining.webp",
    link: "/blog/choose-right-dining-table",
  },
  {
    title: "Decorating Tips for a Cozy Bedroom",
    content:
      "Learn how to create a cozy and inviting bedroom with the right furniture, colors, and accessories.",
    image: "/furniture/boho-bed.jpeg",
    link: "/blog/cozy-bedroom-tips",
  },
  {
    title: "Maximizing Small Spaces with Smart Furniture",
    content:
      "Discover innovative furniture solutions to make the most out of small spaces in your home.",
    image: "/furniture/decor-mirror.jpeg",
    link: "/blog/maximizing-small-spaces",
  },
];

const Blog = () => {
  return (
    <div className="flex flex-col gap-10 md:pt-20 md:px-10 px-5 pt-5">
      <div className="flex items-center gap-4">
        <hr className="border border-black md:w-1/2 w-1/3" />
        <h4 className="font-bold md:text-3xl text-xl capitalize">Our Blog</h4>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold mb-3">{blog.title}</h3>
              <p className="text-gray-800 mb-4 text-sm leading-5">
                {blog.content}
              </p>
              <a href={blog.link} className="underline font-medium text-sm">
                Read More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
