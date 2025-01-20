import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { toast } from "react-toastify";
const ManageReview = () => {
    const axiosSecure = useAxiosSecure()
    const { data: reviews = [], refetch } = useQuery({
        queryKey: ["reviews"],
        queryFn: async () => {
            const res = await axiosSecure.get('/reviews')
            return res.data
        }
    })
    const handledeletelBtn = async (review) => {
        try {
            const res = await axiosSecure.delete(`/review/${review._id}`)

            if (res.data.deletedCount > 0) {
                toast.success(`${review.userName} review has been deleted `, {
                    autoClose: 3000,
                    theme: 'colored',
                    position: 'top-center'
                })
                refetch()
            }
        } catch (err) {

        }

    }
    return (
        <div>
            <h2 className="text-4xl font-semibold mb-6 text-center">Total Reviews : {reviews.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {reviews.map(review => <div key={review._id}>
                    <div className="border rounded-md lex justify-center text-center  p-4">
                        <div >
                            <div className="flex justify-center">
                                <img className="w-40  h-40 object-cover rounded-full" src={review.userImage
                                } alt="" />
                            </div>
                            <h1 className="mt-2 font-semibold">{review.userName}</h1>
                            <h1>{review.universityName}</h1>
                            <h1 >{review.scholarshipName}</h1>
                            <h1 className="flex justify-center mt-2">
                                <Rating style={{ maxWidth: 100, }} value={review.rating} readOnly />
                            </h1>
                            <h1>{review?.comment}</h1>
                            <h1>{review?.reviewDate}</h1>
                            <button
                                onClick={() => handledeletelBtn(review)}
                                className="bg-red-600 hover:bg-red-700 hover:scale-110 scale-100 transition-all duration-500 text-white py-2 px-4 rounded-md mt-2">Delete</button>
                        </div>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default ManageReview;