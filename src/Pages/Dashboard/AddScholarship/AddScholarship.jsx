import { useState } from 'react';

const AddScholarship = () => {
    const [formData, setFormData] = useState({
        scholarshipName: '',
        universityName: '',
        universityImage: '',
        universityCountry: '',
        universityCity: '',
        universityRank: '',
        subjectCategory: '',
        scholarshipCategory: '',
        degree: '',
        tuitionFees: '',
        applicationFees: '',
        serviceCharge: '',
        applicationDeadline: '',
        postedUserEmail: '',
    });

    const [imageUpload, setImageUpload] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleImageUpload = async () => {
        // if (!imageUpload) {
        //     alert('Please select an image to upload.');
        //     return;
        // }

        const formData = new FormData();
        formData.append('image', imageUpload);

        try {

            //   const res = await axios.post(
            //     'https://api.imgbb.com/1/upload?key=YOUR_IMGBB_API_KEY',
            //     formData
            //   );
            //   const imageUrl = res.data.data.display_url;
            //   setFormData((prev) => ({ ...prev, universityImage: imageUrl }));
            //   alert('Image uploaded successfully!');
        } catch (error) {
            console.error('Error uploading image:', error);
            alert('Failed to upload the image. Please try again.');
        }
    };
    console.log(imageUpload)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Replace with API call to submit data
        alert('Scholarship data submitted!');
    };

    return (
        <div className="p-6  mx-auto  rounded">
            <h2 className="text-2xl font-bold mb-4">Add Scholarship</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* First Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block font-medium">Scholarship Name</label>
                        <input
                            type="text"
                            name="scholarshipName"
                            value={formData.scholarshipName}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-medium">University Name</label>
                        <input
                            type="text"
                            name="universityName"
                            value={formData.universityName}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                </div>

                {/* University Image Upload */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block font-medium">University Image/Logo</label>
                        <input
                            type="file"
                            onChange={(e) => setImageUpload(e.target.files[0])}
                            className="w-full p-2"
                        />
                        <button
                            type="button"
                            onClick={handleImageUpload}
                            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
                        >
                            Upload Image
                        </button>
                    </div>
                    <div>
                        <label className="block font-medium">University Country</label>
                        <input
                            type="text"
                            name="universityCountry"
                            value={formData.universityCountry}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                </div>

                {/* Next Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block font-medium">University City</label>
                        <input
                            type="text"
                            name="universityCity"
                            value={formData.universityCity}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-medium">University World Rank</label>
                        <input
                            type="number"
                            name="universityRank"
                            value={formData.universityRank}
                            onChange={handleInputChange}
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
                            value={formData.subjectCategory}
                            onChange={handleInputChange}
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
                            value={formData.scholarshipCategory}
                            onChange={handleInputChange}
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
                            value={formData.degree}
                            onChange={handleInputChange}
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
                            value={formData.tuitionFees}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                        />
                    </div>
                </div>

                {/* Application Fees */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block font-medium">Application Fees</label>
                        <input
                            type="number"
                            name="applicationFees"
                            value={formData.applicationFees}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-medium">Service Charge</label>
                        <input
                            type="number"
                            name="serviceCharge"
                            value={formData.serviceCharge}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                </div>

                {/* Final Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block font-medium">Application Deadline</label>
                        <input
                            type="date"
                            name="applicationDeadline"
                            value={formData.applicationDeadline}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-medium">Posted User Email</label>
                        <input
                            type="email"
                            name="postedUserEmail"
                            value={formData.postedUserEmail}
                            onChange={handleInputChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full py-2 bg-green-500 text-white font-bold rounded "
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddScholarship;
