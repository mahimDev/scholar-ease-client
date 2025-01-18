import { useState } from "react";
import useApplications from "../../../Hooks/useApplications";
import FeedBackModal from "../../../Components/Accessories/FeedBackModal/FeedBackModal";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { toast } from "react-toastify";
import ApplicationDtsModal from "../../../Components/Accessories/ApplicationDtsModal/ApplicationDtsModal";

const ManageApplications = () => {
    const [applications] = useApplications()
    const axiosSecure = useAxiosSecure()
    const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false)
    const [isDetailsModal, setIsDetailsModal] = useState(false)
    const [application, setapplication] = useState(null)
    const handleFeedBack = (application) => {
        setapplication(application)
        setIsFeedbackModalOpen(true)
    }
    const handleCancleBtn = async (application) => {
        const id = application._id
        try {
            const res = await axiosSecure.patch(`/application/${id}`)
            console.log(res.data)
            if (res.data.modifiedCount > 0) {
                toast.success(`Application has been rejected`, {
                    autoClose: 3000,
                    theme: 'colored',
                    position: 'top-center'
                })
            }
        } catch (err) {
            console.log(err)
        }
    }
    const handleDetailsBtn = (application) => {
        setapplication(application)
        console.log(application)
        setIsDetailsModal(true)
    }
    return (
        <div>
            <div className="p-6 bg-gray-100">
                <h2 className="text-4xl font-semibold mb-6 text-center">Total Applications : {applications.length}</h2>
                <div className="overflow-x-auto">
                    <table className="w-full table-auto bg-white rounded-lg shadow-lg">
                        <thead >
                            <tr className="bg-blue-600 text-white ">
                                <th className="py-2 px-4">  Name</th>
                                <th className="py-2 px-4">Phone</th>
                                <th className="py-2 px-4">SSC Result</th>
                                <th className="py-2 px-4">Study Gap</th>
                                <th className="py-2 px-4"> Degree</th>
                                <th className="py-2 px-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {applications?.map((application, index) => (
                                <tr key={index} className="border-t hover:bg-gray-100 text-center">
                                    <td className="py-2 px-4">{application?.userName}</td>
                                    <td className="py-2 px-4">{application?.phone}</td>
                                    <td className="py-2 px-4">{application?.sscResult}</td>
                                    <td className="py-2 px-4">{application?.studyGap}</td>
                                    <td className="py-2 px-4">{application?.degree}</td>

                                    <td className="py-2 px-4">
                                        <div className="flex mb-2 justify-center">
                                            <button
                                                onClick={() => handleDetailsBtn(application)}
                                                className="bg-blue-500 text-white py-1 px-3 rounded-lg mr-2 hover:bg-blue-600"
                                            >
                                                Details
                                            </button>
                                            <button
                                                onClick={() => handleFeedBack(application)}
                                                className="bg-green-500 text-white py-1 px-3 rounded-lg mr-2 hover:bg-green-600"
                                            >
                                                Feedback
                                            </button>
                                            <button
                                                onClick={() => handleCancleBtn(application)}
                                                className="bg-red-500 text-white py-1 px-3 rounded-lg mr-2 hover:bg-red-600"
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
            {isFeedbackModalOpen &&
                <FeedBackModal
                    application={application}
                    setIsFeedbackModalOpen={setIsFeedbackModalOpen}
                />}
            {isDetailsModal && <ApplicationDtsModal
                application={application}
                setIsDetailsModal={setIsDetailsModal}
            />}
        </div>
    );
};

export default ManageApplications;