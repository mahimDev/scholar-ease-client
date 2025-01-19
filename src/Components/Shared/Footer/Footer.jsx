
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-secondary text-gray-600 py-8">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* About Us */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">About Us</h3>
                    <p className="text-sm">
                        We are dedicated to providing scholarships to students worldwide.
                        Learn more about our mission and goals.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link to="/" className="hover:underline">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/allscholarship" className="hover:underline">
                                Scholarships
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="hover:underline">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="hover:underline">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Contact Us */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Email: info@example.com</li>
                        <li>Phone: +1 (123) 456-7890</li>
                        <li>Address: 123 Main Street, City, Country</li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-lg font-semibold mb-4 text-white">Follow Us</h3>
                    <div className="flex space-x-4">
                        {/* Twitter */}
                        <Link to="#" className="text-gray-600 hover:text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M24 4.6c-.8.4-1.7.7-2.5.8.9-.5 1.6-1.3 1.9-2.3-.9.5-1.8.9-2.8 1.1a4.5 4.5 0 0 0-7.6 4.1c-3.7-.2-7-2-9.2-4.7-.4.7-.6 1.5-.6 2.4 0 1.6.8 3.1 2 3.9-.7 0-1.4-.2-2-.5v.1c0 2.2 1.6 4 3.6 4.4-.4.1-.8.2-1.3.2-.3 0-.6 0-.9-.1.6 1.9 2.4 3.3 4.4 3.3a9 9 0 0 1-5.6 1.9c-.4 0-.7 0-1.1-.1 2 1.3 4.3 2 6.8 2a12.6 12.6 0 0 0 12.7-12.7v-.6c.9-.6 1.7-1.4 2.3-2.2z" />
                            </svg>
                        </Link>
                        {/* Facebook */}
                        <Link to="#" className="text-gray-600 hover:text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M22.2 0H1.8C.8 0 0 .8 0 1.8v20.4c0 1 .8 1.8 1.8 1.8h11v-9h-3v-3h3V8.5c0-3 1.8-4.7 4.6-4.7 1.3 0 2.5.1 2.9.1v3.4h-2c-1.5 0-1.8.7-1.8 1.7V12h3.6l-.5 3h-3.1v9h6c1 0 1.8-.8 1.8-1.8V1.8c0-1-.8-1.8-1.8-1.8z" />
                            </svg>
                        </Link>
                        {/* Instagram */}
                        <Link to="#" className="text-gray-600 hover:text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2.2a9.8 9.8 0 1 0 0 19.6 9.8 9.8 0 0 0 0-19.6zm0 2.9c.7 0 1.3.6 1.3 1.3s-.6 1.3-1.3 1.3-1.3-.6-1.3-1.3.6-1.3 1.3-1.3zm0 12.7a6.5 6.5 0 0 1-5.5-3.2c.3-.5 1.7-2.4 5.5-2.4s5.3 1.9 5.5 2.4a6.5 6.5 0 0 1-5.5 3.2z" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8 text-sm text-gray-500">
                © 2025 ScholarEase. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
