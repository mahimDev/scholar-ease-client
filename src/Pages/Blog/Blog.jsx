import useAuth from '../../Hooks/useAuth';
const blogPosts = [
    {
        id: 1,
        title: "The Ultimate Guide to Winning Scholarships",
        excerpt: "Discover expert tips on how to craft strong applications, write compelling essays, and maximize your chances of securing financial aid for your studies.",
        image: "https://i.ibb.co.com/yndd1zP/20220204-204810.jpg",
        date: "Feb 17, 2025",
        author: "Mahim",
    },
    {
        id: 2,
        title: "Top 10 Scholarships for International Students",
        excerpt: "A curated list of the best scholarships available for students studying abroad, with eligibility criteria, deadlines, and application tips.",
        image: "https://i.ibb.co.com/VXFFJdH/ying-ge-Yo1c-WJVKFY-unsplash.jpg",
        date: "Feb 10, 2025",
        author: "Oditty",
    },
    {
        id: 3,
        title: "How to Write a Winning Scholarship Essay",
        excerpt: "Master the art of storytelling in your scholarship essay. Learn the key elements that make an essay stand out and impress selection committees.",
        image: "https://i.ibb.co.com/nqqkCrg5/redd-francisco-9o8-Yd-YGTT64-unsplash.jpg",
        date: "Jan 29, 2025",
        author: "Meheraz",
    },
];

const Blog = () => {
    const { isDark } = useAuth()
    return (
        <div className="max-w-6xl mx-auto px-4 py-12">
            {/* Page Header */}
            <h1 className={`text-4xl font-bold  text-center mb-10 ${isDark ? "text-gray-300" : "text-gray-800"}`}>
                Our Latest Blog Posts
            </h1>

            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <div key={post.id} className={`${isDark ? "bg-gray-800" : "bg-white"} shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300`}>
                        <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
                        <div className="p-6">
                            <h2 className={`text-2xl font-semibold ${isDark ? "text-gray-300" : "text-gray-800"}`}>{post.title}</h2>
                            <p className="text-gray-600 text-sm mt-2">{post.excerpt}</p>
                            <div className="flex items-center justify-between mt-4 text-gray-500 text-sm">
                                <span>{post.author}</span>
                                <span>{post.date}</span>
                            </div>
                            {/* <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-600 transition-all">
                                Read More
                            </button> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blog;
