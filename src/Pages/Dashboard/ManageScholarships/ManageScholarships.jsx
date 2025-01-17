import { useNavigate } from "react-router-dom";
import useScholarship from "../../../Hooks/useScholarship";
import { useState } from "react";
import EditScholarshipForm from "../../../Components/Accessories/EditScholarshipForm/EditScholarshipForm";

const ManageScholarships = () => {
    const navigate = useNavigate()
    const [scholarships, refetch] = useScholarship()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleEditFormSubmit = () => {
        setIsModalOpen(false)
    }
    return (
        <div>
            <div className="p-6 bg-gray-100">
                <h2 className="text-4xl font-semibold mb-6 text-center">Your Applied Scholarships : { }</h2>
                <div className="overflow-x-auto">
                    <table className="w-full table-auto bg-white rounded-lg shadow-lg">
                        <thead >
                            <tr className="bg-blue-600 text-white ">
                                <th className="py-2 px-4">Scholarship  Name</th>
                                <th className="py-2 px-4">University Name</th>
                                <th className="py-2 px-4">Subject Category</th>
                                <th className="py-2 px-4"> Degree</th>
                                <th className="py-2 px-4">Application Fees</th>
                                <th className="py-2 px-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {scholarships?.map((scholarship, index) => (
                                <tr key={index} className="border-t hover:bg-gray-100 text-center">
                                    <td className="py-2 px-4">{scholarship?.scholarshipName}</td>
                                    <td className="py-2 px-4">{scholarship?.universityName},{scholarship?.universityCountry}</td>
                                    <td className="py-2 px-4">{scholarship.subjectCategory}</td>

                                    <td className="py-2 px-4">{scholarship.degree}</td>
                                    <td className="py-2 px-4">${scholarship.applicationFees}</td>

                                    <td className="py-2 px-4">
                                        <div className="flex mb-2 justify-center">
                                            <button
                                                onClick={() => navigate(`/scholarshipDetails/${scholarship._id}`)}
                                                className="bg-blue-500 text-white py-1 px-3 rounded-lg mr-2 hover:bg-blue-600"
                                            >
                                                Details
                                            </button>
                                            <button
                                                onClick={() => setIsModalOpen(true)}
                                                className="bg-green-500 text-white py-1 px-3 rounded-lg mr-2 hover:bg-green-600"
                                            >
                                                Edit
                                            </button>
                                            <button

                                                className="bg-red-500 text-white py-1 px-3 rounded-lg mr-2 hover:bg-red-600"
                                            >
                                                Delete
                                            </button>
                                        </div>

                                    </td>
                                    {isModalOpen && <EditScholarshipForm
                                        scholarship={scholarship}
                                        onClose={() => setIsModalOpen(false)}
                                        refetch={refetch}
                                        onSubmit={handleEditFormSubmit}
                                    />}

                                </tr>

                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default ManageScholarships;