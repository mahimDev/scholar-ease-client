import { Link, useLoaderData } from "react-router-dom";

const ScholarshipDetails = () => {
    const loaderData = useLoaderData()
    const {
        applicationDeadline,
        applicationFees,
        degree,
        postedUserEmail,
        scholarshipCategory,
        scholarshipName,
        serviceCharge,
        subjectCategory,
        tuitionFees,
        universityCity,
        universityCountry,
        universityImage,
        universityName,
        _id

    } = loaderData
    return (
        <div>
            <div className="w-11/12 mx-auto mt-20 lg:flex gap-20">
                <div className="">
                    <img className=" h-[60vh] rounded-md" src={universityImage} alt="" />
                </div>
                <div>
                    <div className={`flex `}>
                        <div className="">
                            <h1 className="text-4xl font-semibold ">{universityName}</h1>
                            <p className="mt-7 "><strong>Scholarship Name :</strong> <br /> {scholarshipName}</p>

                            <p className="mt-3"><strong>country :</strong> <br />{universityCity},{universityCountry}</p>

                            <p className="mt-3 "><strong>Scholarship category :</strong> <br /> {scholarshipCategory}</p>
                            <p className="mt-3"><strong>Subject name :</strong> <br /> {subjectCategory}</p>
                            <p className="mt-3"><strong>Service Charge :</strong> <br /> ${serviceCharge}</p>
                            <p className="mt-3"><strong>Application Deadline :</strong> <br /> {applicationDeadline}</p>
                            <p className="mt-3 "><strong>Scholarship Description : </strong> <br /> {'description'}</p>
                        </div>
                        <p className="text-[#d5a403] text-4xl font-semibold rounded-md  w-32"> ${applicationFees}</p>
                    </div>
                    <div className=" mt-10">
                        <Link to={`/payment/${_id}`}>
                            <button
                                className="rounded-sm w-full text-center py-3 text-xl font-semibold bg-secondary hover:shadow-xl duration-300 hover:scale-105">Apply for the Scholarship</button>
                        </Link>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default ScholarshipDetails;