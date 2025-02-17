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
    const handleToggle = (idx) => {
        setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));
    };
    return (
        <div>
            {/*  */}
            <div className="flex w-full justify-center">
                <div className="max-w-[500px]  cursor-pointer space-y-6">
                    {/* mapping each accordion  */}
                    {dataArr.map((data, idx) => (
                        <div key={idx} onClick={() => handleToggle(idx)} className="flex items-center">
                            {/* the index div  */}
                            <div className="flex size-16 select-none items-center justify-center rounded-md bg-zinc-700 text-2xl font-semibold text-white">
                                <span>0{idx + 1}</span>
                            </div>

                            <div className="relative h-[2px] w-10 bg-zinc-700">
                                <span className="absolute -left-2 -top-[5px] z-40 h-3 w-3 rounded-full border-2 border-zinc-700 bg-white"></span>
                                <span className="h-1 w-10 bg-zinc-700"></span>
                                <span
                                    className={`absolute -right-2 -top-[5px] z-40 h-3 w-3 rounded-full border-2 ${isOpen === idx ? 'border-zinc-700 bg-white delay-100' : 'border-transparent'}`}
                                ></span>
                            </div>

                            {/* main accordion div  */}
                            <div className="text-center">
                                <div className="relative max-w-[450px] border-t-[12px] border-zinc-700 bg-sky-50 p-3 shadow-md">
                                    <span className="absolute right-0 top-0 h-0 w-0 border-b-[40px] border-r-[40px] border-b-transparent border-r-zinc-700"></span>
                                    <h1 className="select-none text-lg text-zinc-700">{data.question}</h1>
                                </div>
                                <div className={`grid overflow-hidden text-slate-600 transition-all duration-300 ease-in-out ${isOpen === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                    <div className="overflow-hidden">
                                        <div className="max-w-[450px] bg-zinc-700 p-6 text-sm text-white">{data.answer}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default FAQ;