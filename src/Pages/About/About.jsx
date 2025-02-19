import useAuth from "../../Hooks/useAuth";

const About = () => {
    const { isDark } = useAuth()
    return (
        <div>
            <div className={`min-h-screen  ${isDark ? "text-gray-300" : "text-gray-900"} flex flex-col items-center p-6`}>
                {/* Hero Section */}
                <section className="w-full max-w-4xl text-center py-12">
                    <h1 className="text-4xl font-bold ">About ScholarEase</h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Empowering students worldwide by providing access to scholarships.
                    </p>
                </section>

                {/* Mission Section */}
                <section className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl w-full text-center mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
                    <p className="mt-4 text-gray-600">
                        We strive to make scholarship opportunities accessible for students across the globe by simplifying the application process and offering valuable resources.
                    </p>
                </section>

                {/* Team Section */}
                <section className="max-w-4xl w-full">
                    <h2 className="text-2xl font-semibold text-center mb-6">Meet Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { name: "Mahim", role: "Frontend Developer", img: "https://i.ibb.co.com/kV10shXM/Whats-App-Image-2024-04-18-at-10-51-11-00e585dd.jpg" },
                            { name: "Rayhan", role: "Backend Engineer", img: "https://i.ibb.co.com/X6ff1m6/Whats-App-Image-2025-02-17-at-23-29-42-ed8dc14c.jpg" },
                            { name: "Rakib", role: "UI/UX Designer", img: "https://i.ibb.co.com/ynXYCxyF/472473319-1276549610318615-71192792586177863-n.jpg" }
                        ].map((member, index) => (
                            <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center">
                                <div className="h-20 w-20 mx-auto bg-gray-300 rounded-full overflow-hidden">
                                    <img className="w-full h-full object-cover" src={member.img} alt="" />
                                </div>
                                <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
                                <p className="text-gray-600">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Contact Section */}
                <section className="bg-white shadow-lg rounded-2xl p-8 max-w-3xl w-full text-center mt-8">
                    <h2 className="text-2xl font-semibold text-gray-800">Contact Us</h2>
                    <p className="mt-4 text-gray-600">
                        Have questions? Reach out to us at
                        <a href="mailto:md286667@gmail.com" className="text-blue-500"> md286667@gmail.com</a>
                    </p>
                </section>
            </div>
        </div>
    );
};

export default About;
