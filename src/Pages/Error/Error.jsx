
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <div className="text-9xl font-extrabold text-secondary animate-bounce">
                    404
                </div>
                <h1 className="text-3xl font-semibold text-gray-800 mb-4">
                    Oops! Page not found.
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                    The page you are looking for might have been removed, had its name
                    changed, or is temporarily unavailable.
                </p>
                <Link
                    to="/"
                    className="text-white bg-secondary px-6 py-3 rounded-lg text-lg transition-all duration-300 hover:bg-secondary/70 hover:scale-105"
                >
                    Go back to Homepage
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
