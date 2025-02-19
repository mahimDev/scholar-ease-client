import { useEffect, useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ReactStars from 'react-stars';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import useAuth from '../../../Hooks/useAuth';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const { isDark } = useAuth()
    const axiosPublic = useAxiosPublic()
    // Create array with 500 slides

    useEffect(() => {
        axiosPublic.get(`/reviews`)
            .then(res => setReviews(res.data))
    }, [axiosPublic])

    // moment().subtract(review?.isDate, 'days').calendar()
    console.log(reviews)
    return (
        <div className='mt-32 w-11/12 mx-auto '>
            <h1 className={`text-center  font-semibold text-5xl text-darkGray mb-20 ${isDark && "text-lightGray"}`}>
                Our Reviews
            </h1>
            {/* lg device */}
            <div className='hidden lg:block'>
                <Swiper
                    modules={[Virtual, Navigation, Pagination]}
                    slidesPerView={4}
                    // centeredSlides={true}

                    spaceBetween={30}
                    // pagination={{
                    //     type: 'fraction',
                    // }}
                    navigation={true}
                    virtual
                >

                    {reviews?.map((review, index) => (
                        <SwiperSlide key={review._id} virtualIndex={index}>
                            <div className={`flex text-center flex-col justify-center items-center lg:h-[250px]   border  rounded ${isDark ? "text-lightGray bg-darkGray" : "text-darkGray bg-lightGray"}`}>
                                <h1>{review.userName || 'User Name'}</h1>

                                <ReactStars
                                    count={5}
                                    value={review?.rating}
                                    edit={false}
                                    size={45}
                                    color2={'#ffd700'}
                                />

                                <p className='w-3/4'> {review?.comment}</p>
                                <p>{new Date(review?.reviewDate).toLocaleDateString()}</p>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
            {/* lg device */}
            <div className='lg:hidden block'>
                <Swiper
                    modules={[Virtual, Navigation, Pagination]}
                    slidesPerView={2}
                    // centeredSlides={true}

                    spaceBetween={30}
                    // pagination={{
                    //     type: 'fraction',
                    // }}
                    navigation={true}
                    virtual
                >

                    {reviews?.map((review, index) => (
                        <SwiperSlide key={review._id} virtualIndex={index}>
                            <div className='flex text-center flex-col justify-center items-center h-[200px]   border text-darkGray bg-lightGray rounded'>
                                <h1>{review.userName || 'User Name'}</h1>

                                <ReactStars
                                    count={5}
                                    value={review?.rating}
                                    edit={false}
                                    size={30}
                                    color2={'#ffd700'}
                                />

                                <p className='w-3/4'> {review?.comments}</p>
                                <p>{new Date(review?.isDate).toLocaleDateString()}</p>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>

        </div>
    );
};

export default Reviews;