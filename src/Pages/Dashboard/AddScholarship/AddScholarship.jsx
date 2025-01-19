
import axios from 'axios';
import useAuth from '../../../Hooks/useAuth';
import { toast } from 'react-toastify';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const AddScholarship = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()
    const date = new Date()
    const handleImageUpload = async (image) => {
        const formData = new FormData();
        formData.append('image', image);
        try {
            const res = await axios.post(
                `${import.meta.env.VITE_IMAGE_API_URL}?key=${import.meta.env.VITE_IMAGE_API_KEY}`,
                formData
            );
            return res.data.data.display_url;
        } catch (error) {
            console.error('Error uploading image:', error);
            toast.error('Failed to upload the image. Please try again.');
            return null;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Convert form data to an object
        const form = new FormData(e.target);
        const formData = Object.fromEntries(form.entries());

        // Handle the image upload
        const imageFile = form.get('universityImage');

        if (imageFile.size > 0) {
            const uploadedImageUrl = await handleImageUpload(imageFile);

            if (uploadedImageUrl) {
                formData.universityImage = uploadedImageUrl;
            } else {
                toast.error('Image upload failed. Cannot proceed.');
                return;
            }
        } else {
            toast.error('Please select an image to upload.');
            return;
        }

        const res = await axiosSecure.post('/scholarship', formData)
        if (res.data.insertedId) {
            toast.success(`Scholarship added successfully`, {
                autoClose: 2000
            })
        }

    };

    return (
        <div className="p-6 mx-auto rounded">
            <h2 className="text-2xl font-bold mb-4">Add Scholarship</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* First Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block font-medium">Scholarship Name</label>
                        <input
                            type="text"
                            name="scholarshipName"
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-medium">University Name</label>
                        <input
                            type="text"
                            name="universityName"
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                </div>

                {/* University Image Upload */}
                <div>
                    <label className="block font-medium">University Image/Logo</label>
                    <input
                        type="file"
                        name="universityImage"
                        className="w-full p-2"
                        required
                    />
                </div>

                {/* Other Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block font-medium">University Country</label>
                        <input
                            type="text"
                            name="universityCountry"
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-medium">University City</label>
                        <input
                            type="text"
                            name="universityCity"
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                </div>

                {/* Dropdown Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block font-medium">Subject Category</label>
                        <select
                            name="subjectCategory"
                            className="w-full p-2 border rounded"
                            required
                        >
                            <option value="">Select</option>
                            <option value="Agriculture">Agriculture</option>
                            <option value="Engineering">Engineering</option>
                            <option value="Doctor">Doctor</option>

                        </select>
                    </div>
                    <div>
                        <label className="block font-medium">Scholarship Category</label>
                        <select
                            name="scholarshipCategory"
                            className="w-full p-2 border rounded"
                            required
                        >
                            <option value="">Select</option>
                            <option value="Full fund">Full fund</option>
                            <option value="Partial">Partial</option>
                            <option value="Self-fund">Self-fund</option>
                        </select>
                    </div>
                </div>

                {/* Degree and Fees */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block font-medium">Degree</label>
                        <select
                            name="degree"
                            className="w-full p-2 border rounded"
                            required
                        >
                            <option value="">Select</option>
                            <option value="Diploma">Diploma</option>
                            <option value="Bachelor">Bachelor</option>
                            <option value="Masters">Masters</option>
                        </select>
                    </div>
                    <div>
                        <label className="block font-medium">Tuition Fees (Optional)</label>
                        <input
                            type="number"
                            name="tuitionFees"
                            className="w-full p-2 border rounded"
                        />
                    </div>
                </div>

                {/* Application Fees and Service Charge */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block font-medium">Application Fees</label>
                        <input
                            type="number"
                            name="applicationFees"
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-medium">Service Charge</label>
                        <input
                            type="number"
                            name="serviceCharge"
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                </div>

                {/* Dates and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block font-medium">Application Deadline</label>
                        <input
                            type="date"
                            name="applicationDeadline"
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-medium">Posted User Email</label>
                        <input
                            value={user?.email}
                            type="email"
                            name="postedUserEmail"
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>

                </div>


                <button
                    type="submit"
                    className="w-full py-2 bg-green-500 text-white font-bold rounded"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddScholarship;
