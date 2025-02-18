import { useState } from "react";

const FAQ = () => {
    // add your array of object data
    const dataArr = [{
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
    },];

    // toggle state and function

    const [isOpen, setIsOpen] = useState(null);
    const toggle = (idx) => {
        setIsOpen((prevIdx) => (prevIdx === idx ? null : idx))
    };
    return (
        <div className="md:flex  w-11/12 mx-auto">
            <div className="flex-1">

                <h1 className="text-6xl font-semibold">frequently asked question</h1>

            </div>
            <div className="w-full flex-1  rounded-lg bg-white p-3 *:mix-blend-difference ">
                {dataArr.map((PerAccordion, idx) => (
                    <div key={idx} className="border-b border-gray-500/50 py-3 last-of-type:border-b-0">
                        <button onClick={() => toggle(idx)} className="flex h-full w-full items-center justify-between font-medium text-white outline-none">
                            <span>{PerAccordion.question}</span>
                            <span className="rounded-full p-2">
                                <svg className="ml-8 size-3 shrink-0 fill-white" xmlns="http://www.w3.org/2000/svg">
                                    <rect y="5" width="12" height="2" rx="1" className={`origin-center transform transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} />
                                    <rect y="5" width="12" height="2" rx="1" className={`origin-center rotate-90 transform transition duration-200 ease-out ${isOpen === idx && '!rotate-180'}`} />
                                </svg>
                            </span>
                        </button>
                        <div className={`grid overflow-hidden text-zinc-400 transition-all duration-300 ease-in-out ${isOpen === idx ? 'grid-rows-[1fr] pb-1 pt-4 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                            <div className="overflow-hidden pr-4 text-sm">{PerAccordion.answer}</div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default FAQ;

