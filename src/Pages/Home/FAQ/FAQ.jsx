import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";

const FAQ = () => {
    const faqData = [
        {
            question: "How do I apply for a scholarship?",
            answer: "You can apply by creating an account, searching for scholarships, and submitting the required documents through the application portal.",
        },
        {
            question: "Is ScholarEase free to use?",
            answer: "Yes! ScholarEase is completely free for students looking for scholarships.",
        },
        {
            question: "Can I apply for multiple scholarships?",
            answer: "Yes, you can apply for as many scholarships as you qualify for.",
        },
        {
            question: "How will I know if my application is accepted?",
            answer: "You will receive an email notification, and you can track your application status in your dashboard.",
        },
    ];

    const [isOpen, setIsOpen] = useState(null);
    const toggleFAQ = (idx) => setIsOpen(isOpen === idx ? null : idx);
    const { isDark } = useAuth()
    return (
        <div className="w-11/12 mx-auto max-w-4xl mt-32">
            {/* FAQ Title */}
            <h1 className="text-4xl md:text-5xl font-semibold text-center">
                Frequently Asked Questions
            </h1>

            {/* FAQ Container */}
            <div className={`shadow-lg rounded-lg p-6 mt-20 ${isDark ? "bg-gray-800 text-gray-100" : ""}`}>
                {faqData.map((faq, idx) => (
                    <div key={idx} className="border-b last:border-none py-3">
                        {/* Question Button */}
                        <button
                            onClick={() => toggleFAQ(idx)}
                            className="flex justify-between w-full text-lg font-medium  hover:text-secondary transition-all"
                        >
                            {faq.question}
                            <span className="p-2">
                                {isOpen === idx ? (
                                    <svg className="size-5 text-secondary" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 8a1 1 0 011-1h7a1 1 0 110 2h-7a1 1 0 01-1-1z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg className="size-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                                    </svg>
                                )}
                            </span>
                        </button>

                        {/* Answer Section */}
                        <div
                            className={`overflow-hidden transition-all duration-300 ${isOpen === idx ? "max-h-40 opacity-100 py-2" : "max-h-0 opacity-0"
                                }`}
                        >
                            <p className="text-gray-500">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
