
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import ReviewModal from "../../../Components/Accessories/ReviewModal/ReviewModal";

const MyReviews = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [reviewData, setReviewData] = useState({});
    const { data: reviews = [], refetch } = useQuery({
        queryKey: [user.email, "review"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/review/${user.email}`)
            return res.data
        }
    })
    const handleCancelBtn = async (review) => {
        try {
            const res = await axiosSecure.delete(`/review/${review._id}`)
            if (res.data.deletedCount > 0) {
                toast.success(`Review deleted success`, {
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
        setReviewData(data)
        setIsModalOpen(true)
    }
    const handleReviewSubmit = async (data) => {
        const { rating, comment, applicationId: id } = data

        try {
            const res = await axiosSecure.patch(`/review`, { rating, comment, id })

            if (res.data.modifiedCount > 0) {
                toast.success(`Review edit success`, {
                    autoClose: 3000,
                    theme: 'colored',
                    position: 'top-center'
                })
                refetch()
            }
        } catch (err) {

        }

        setIsModalOpen(false)
    }
    return (
        <div>
            <div className="p-6 bg-gray-100">
                <h2 className="text-4xl font-semibold mb-6 text-center">Your Applied Scholarship Review : {reviews.length}</h2>
                <div className="overflow-x-auto">
                    <table className="w-full table-auto bg-white rounded-lg shadow-lg">
                        <thead >
                            <tr className="bg-blue-600 text-white ">
                                <th className="py-2 px-4">Scholarship Name</th>
                                <th className="py-2 px-4">University Name</th>
                                <th className="py-2 px-4">Review comments</th>
                                <th className="py-2 px-4">Review date</th>
                                <th className="py-2 px-4">Actions</th>

                            </tr>
                        </thead>
                        <tbody>
                            {reviews?.map((review, index) => (
                                <tr key={index} className="border-t hover:bg-gray-100 text-center">
                                    <td className="py-2 px-4">{review?.scholarshipName}</td>
                                    <td className="py-2 px-4">{review?.universityName
                                    }</td>
                                    <td className="py-2 px-4">{review.comment || 'No Comment'}</td>

                                    <td className="py-2 px-4">{review.reviewDate}</td>


                                    <td className="py-2 px-4">
                                        <div className="flex mb-2 justify-evenly">

                                            <button
                                                onClick={() => handleReviewBtn(review)}
                                                className="bg-green-500 text-white py-1 px-3 rounded-lg mr-2 hover:bg-green-600 w-20"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleCancelBtn(review)}
                                                className="bg-red-500 text-white py-1 px-3 rounded-lg mr-2 hover:bg-red-600 w-20"
                                            >
                                                Cancel
                                            </button>
                                        </div>

                                    </td>

                                </tr>

                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {isModalOpen && <ReviewModal
                data={reviewData}
                user={user}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleReviewSubmit}
            />}
        </div>
    );
};

export default MyReviews;