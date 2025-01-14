import ScholarshipCart from "../../Components/Accessories/ScholarshipCart/ScholarshipCart";
import useScholarship from "../../Hooks/useScholarship";

const AllScholarship = () => {
    const [scholarships] = useScholarship()
    console.log(scholarships)
    return (
        <div >
            <div className="w-10/12 mx-auto grid md:grid-cols-2 lg:grid-cols-3">
                {
                    scholarships.map(scholarship => <ScholarshipCart key={scholarship._id} data={scholarship}></ScholarshipCart>)
                }
            </div>
        </div>
    );
};

export default AllScholarship;