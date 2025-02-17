import { FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <div className="lg:flex items-center w-11/12 mx-auto my-32">
            <div className="grid grid-cols-1 mg:grid-col-2 lg:grid-cols-3 flex-1 border p-2 rounded-lg">
                <div className="m-2  col-span-2 overflow-hidden rounded-lg">
                    <img className="w-full h-full object-cover rounded-lg hover:scale-105 duration-500" src="https://i.ibb.co.com/pR8Fyy1/group-of-happy-students-and-their-teacher-using-laptop-during-a-class-at-the-university-jpg-s1024x10.jpg" alt="" />
                </div>
                <div className="m-2 overflow-hidden rounded-lg">
                    <img className="w-full h-full object-cover rounded-lg hover:scale-105 duration-500" src="https://i.ibb.co.com/0nWCqXg/employees-using-laptop-800x450.jpg" alt="" />
                </div>
                <div className="m-2 col-span-1 overflow-hidden rounded-lg">
                    <img className="w-full h-full object-cover rounded-lg hover:scale-105 duration-500" src="https://i.ibb.co.com/Jc2qpw4/woman-in-wheelchair-working-800x450.jpg" alt="" />
                </div>
                <div className="m-2 col-span-2 overflow-hidden rounded-lg">
                    <img className="w-full h-full object-cover rounded-lg hover:scale-105 duration-500" src="https://i.ibb.co.com/nz45cVG/recalibrating-career-services-understanding-of-and-approach-to-helping-todays-students-xlarge.png" alt="" />
                </div>

            </div>
            <div className="flex-1">
                <div className="ml-10 w-10-12">
                    <h1 className="text-7xl font-medium text-text">Our Professional Team Member</h1>

                    <p className=" p-2  mt-4 text-text/60">Our team is composed of passionate, highly skilled professionals dedicated to excellence in every aspect of their work. With expertise spanning diverse fields, our members bring years of experience, innovative thinking, and a shared commitment to achieving outstanding results. Together, we foster a collaborative environment where creativity thrives, challenges are embraced, and goals are consistently exceeded. Each team member plays a pivotal role in ensuring that we deliver unparalleled quality and value, making us a trusted choice for our clients and partners</p>
                    <div className=" mt-7">
                        <Link to="/about"> <button className="text-lg font-semibold bg-secondary/20 text-secondary  py-2 px-5 hover:gap-3 duration-500 flex items-center gap-2 ">About Us More <FaArrowAltCircleRight /></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;