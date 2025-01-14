import { Link } from "react-router-dom";
import './scholar.css'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
const ScholarshipCart = (props = {}) => {
    const { data } = props || {}
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

    } = data
    return (
        <div>
            <div className="card2Section ">
                <div className="card2 ">
                    <Link to={`/scholarshipDetails/${_id}`}>
                        <img className='image' src={universityImage} alt="" />
                        <div className="into">
                            <h1 className='card2h1 text-2xl font-semibold '>{universityName}</h1>
                            <p className='card2p' >{scholarshipName}
                            </p>
                            <p className='card2p' ><Rating style={{ maxWidth: 100 }} value={5} />
                            </p>
                            <div className='bg-darkGray/40 card2p rounded text-center'>

                            </div>

                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ScholarshipCart;