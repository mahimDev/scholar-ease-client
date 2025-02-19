import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { GoLaw } from "react-icons/go";
import { MdAgriculture, MdScience } from "react-icons/md";

const ScholarshipCategories = () => {
    return (
        <div className="w-11/12 mx-auto mt-32">
            <h1 className="text-7xl font-medium  "> Scholarship Categories</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mt-20 gap-5">
                <div className="border rounded-lg group bg-secondary/10 hover:bg-secondary duration-500 flex justify-center items-center w-[350px] h-[300px]">
                    <div className="text-secondary group-hover:text-background duration-500">
                        <h1 className="text-6xl ml-6"><FaUserDoctor /></h1>
                        <h2 className="text-4xl font-semibold mt-1">Doctor</h2>
                        {/* <div className=" mt-3 ml-8">
                            <button className="text-lg font-semibold   flex items-center gap-2 ">Go <FaArrowAltCircleRight /></button>
                        </div> */}
                    </div>
                </div>
                <div className="border rounded-lg group bg-secondary/10 hover:bg-secondary duration-500 flex justify-center items-center w-[350px] h-[300px]">
                    <div className="text-secondary group-hover:text-background duration-500">
                        <h1 className="text-6xl ml-14"> <MdAgriculture /></h1>
                        <h2 className="text-4xl font-semibold mt-1">Agriculture</h2>
                        {/* <div className=" mt-3 ml-14">
                            <button className="text-lg font-semibold   flex items-center gap-2 ">Go <FaArrowAltCircleRight /></button>
                        </div> */}
                    </div>
                </div>
                <div className="border rounded-lg group bg-secondary/10 hover:bg-secondary duration-500 flex justify-center items-center w-[350px] h-[300px]">
                    <div className="text-secondary group-hover:text-background duration-500">
                        <h1 className="text-6xl ">    <GoLaw /></h1>
                        <h2 className="text-4xl font-semibold mt-1"> law</h2>
                        {/* <div className=" mt-3 ml-2">
                            <button className="text-lg font-semibold   flex items-center gap-2 ">Go <FaArrowAltCircleRight /></button>
                        </div> */}
                    </div>
                </div>
                <div className="border rounded-lg group bg-secondary/10 hover:bg-secondary duration-500 flex justify-center items-center w-[350px] h-[300px]">
                    <div className="text-secondary group-hover:text-background duration-500">
                        <h1 className="text-6xl ml-7"><MdScience /></h1>
                        <h2 className="text-4xl font-semibold mt-1">Science</h2>
                        {/* <div className=" mt-3 ml-8">
                            <button className="text-lg font-semibold   flex items-center gap-2 ">Go <FaArrowAltCircleRight /></button>
                        </div> */}
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ScholarshipCategories;