import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import ScholarshipCart from "../../../Components/Accessories/ScholarshipCart/ScholarshipCart";

const Featured = () => {
    const [scholarships, setScholarships] = useState([])
    const axiosPublic = useAxiosPublic()
    useEffect(() => {
        axiosPublic.get('/featuredScholarship')
            .then(res => {
                setScholarships(res.data)
            })
    }, [axiosPublic])
    console.log(scholarships)
    return (
        <div className="w-10/12 mx-auto">
            <h1 className="text-6xl font-bold mt-28 mb-10 text-center">Top Scholarship</h1>
            <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 ">
                {scholarships.map(scholarship => <ScholarshipCart
                    key={scholarship._id}
                    data={scholarship}
                ></ScholarshipCart>)}
            </div>
        </div>
    );
};

export default Featured;