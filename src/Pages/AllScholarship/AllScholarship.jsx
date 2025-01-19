import { FaSearch } from "react-icons/fa";
import ScholarshipCart from "../../Components/Accessories/ScholarshipCart/ScholarshipCart";
import useScholarship from "../../Hooks/useScholarship";

const AllScholarship = () => {
    // const [searchValue, setSearchValue] = useState('')
    const [scholarships, , setsearchValue, searchValue] = useScholarship()
    // const axiosPublic = useAxiosPublic()
    // const { data: scholarships = [], refetch } = useQuery({
    //     queryKey: [searchValue, "scholarships"],
    //     queryFn: async () => {
    //         const res = await axiosPublic.get(`/scholarship?search=${searchValue}`)
    //         return res.data
    //     }
    // })
    return (
        <div >
            <div className=" flex justify-center my-5 py-2" >
                <div className="border-2 border-secondary/50 flex gap-3 py-1 items-center px-4 rounded-full mt-10">
                    <h1 className="text-secondary/50">
                        <FaSearch />
                    </h1>
                    <input
                        onChange={(e) => setsearchValue(e.target.value)}
                        value={searchValue}
                        type="text"
                        className="py-2  pr-40 focus:outline-none focus:ring-0"
                        name="search" id=""
                    />
                </div>
            </div>
            <div className="min-h-[90vh]">
                {scholarships.length ? <div className="w-10/12 mx-auto grid md:grid-cols-2 lg:grid-cols-3">
                    {
                        scholarships.map(scholarship => <ScholarshipCart key={scholarship._id} data={scholarship}></ScholarshipCart>)
                    }
                </div> :
                    <div>
                        <h1 className="text-6xl text-secondary text-center">
                            scholarship  not available
                        </h1></div>}
            </div>
        </div>
    );
};

export default AllScholarship;