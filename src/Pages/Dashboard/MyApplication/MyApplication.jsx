import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useAuth from "../../../Hooks/useAuth";
import { toast } from "react-toastify";
import { useState } from "react";
import ReviewModal from "../../../Components/Accessories/ReviewModal/ReviewModal";
import { useNavigate } from "react-router-dom";
import ApplicationEditModal from "../../../Components/Accessories/ApplicationEditModal/ApplicationEditModal";

const MyApplication = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [applicationData, setApplicationData] = useState({})
    const [editApplicationData, setEditApplicationData] = useState({})
    const { data: applications = [], refetch } = useQuery({
        queryKey: [user.email, "applications"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/application/${user.email}`)
            return res.data
        }
    })

    const handleCancelBtn = async (scholarship) => {
        try {
            const res = await axiosSecure.delete(`/application/${scholarship._id}`)

            if (res.data.deletedCount > 0) {
                toast.success(`${scholarship?.scholarshipName} deleted`, {
                    autoClose: 3000,
                    theme: 'colored',
                    position: 'top-center'
                })
                refetch()
            }
        } catch (err) {

        }
    }
    const handleReviewBtn = (data) => {
        setApplicationData(data)
        setIsModalOpen(true)
    }
    const handleReviewSubmit = async (data) => {

        try {
            const res = await axiosSecure.post(`/review`, data)
            if (res.data.massage) {
                toast.error(res.data.massage, {
                    autoClose: 3000,
                    theme: 'colored',
                    position: 'top-center'
                })
            }
            if (res.data.insertedId) {
                toast.success(`Review added success`, {
                    autoClose: 3000,
                    theme: 'colored',
                    position: 'top-center'
                })
            }
        } catch (err) {

        }
        setIsModalOpen(false)
    }
    const handleEditBtn = (data) => {
        setEditApplicationData(data)
        setIsEditModalOpen(true)
    }
    return (
        <div>

            <div className="p-6 ">
                <h2 className="text-4xl font-semibold mb-6 text-center">Your Applied Scholarships : {applications?.length}</h2>
                <div className="overflow-x-auto">
                    <table className="w-full table-auto  rounded-lg shadow-lg">
                        <thead >
                            <tr className="bg-blue-600 text-white ">
                                <th className="py-2 px-4">University Name</th>
                                <th className="py-2 px-4">University Address</th>
                                <th className="py-2 px-4">Application Feedback</th>
                                <th className="py-2 px-4">Applied Degree</th>
                                <th className="py-2 px-4">Application Fees</th>
                                <th className="py-2 px-4">Application Status</th>
                                <th className="py-2 px-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applications?.map((scholarship, index) => (
                                <tr key={index} className="border-t hover:bg-gray-500 text-center">
                                    <td className="py-2 px-4">{scholarship?.universityName}</td>
                                    <td className="py-2 px-4">{scholarship?.universityCity},{scholarship?.universityCountry}</td>
                                    <td className="py-2 px-4">{scholarship?.feedback || 'No Feedback'}</td>

                                    <td className="py-2 px-4">{scholarship.degree}</td>
                                    <td className="py-2 px-4">${scholarship.applicationFees}</td>
                                    <td className={`py-2 px-4 font-semibold`}>
                                        {scholarship?.status || 'pending'}
                                    </td>
                                    <td className="py-2 px-4">
                                        <div className="flex mb-2 justify-around">
                                            <button
                                                onClick={() => navigate(`/scholarshipDetails/${scholarship.scholarshipId}`)}
                                                className="bg-blue-500 text-white py-1 px-3 rounded-lg mr-2 hover:bg-blue-600"
                                            >
                                                Details
                                            </button>
                                            {scholarship?.status === "panding" || scholarship?.status === undefined ?
                                                <button
                                                    onClick={() => handleEditBtn(scholarship)}
                                                    className="bg-green-500 text-white py-1 px-3 rounded-lg mr-2 hover:bg-green-600"
                                                >
                                                    Edit
                                                </button>
                                                : <button
                                                    onClick={() => toast.error(`You cannot edit this application while it's ${scholarship?.status}`)}
                                                    className="bg-green-500 text-white py-1 px-3 rounded-lg mr-2 hover:bg-green-600"
                                                >
                                                    Edit
                                                </button>}
                                            <button
                                                onClick={() => handleCancelBtn(scholarship)}
                                                className="bg-red-500 text-white py-1 px-3 rounded-lg mr-2 hover:bg-red-600"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                        <button
                                            onClick={() => handleReviewBtn(scholarship)}
                                            className="bg-yellow-500 text-white py-1 px-3 rounded-lg w-full hover:bg-yellow-600"
                                        >
                                            Add Review
                                        </button>
                                    </td>


                                </tr>

                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {isModalOpen && <ReviewModal
                data={applicationData}
                user={user}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleReviewSubmit}

            />}
            {isEditModalOpen && <ApplicationEditModal
                scholarship={editApplicationData}
                onClose={() => setIsEditModalOpen(false)}
                refetch={refetch}
                setIsEditModalOpen={setIsEditModalOpen}
            />}
        </div>
    );
};

export default MyApplication;