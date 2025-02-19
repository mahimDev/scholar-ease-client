
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import 'swiper/css/scrollbar';
import 'swiper/css';
import { Link } from 'react-router-dom';
import { motion } from "motion/react"
const Banner = () => {
    return (
        <div
            className=''
        //  className=' h-[85vh] bg-world bg-no-repeat bg-cover mt-10 '
        >
            <Swiper
                scrollbar={{
                    hide: true,
                }}
                modules={[Scrollbar]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='  backdrop-blur-sm h-[85vh] bg-secondary/10   '>
                        <div className='lg:flex'>
                            <div className='  flex-1  lg:pt-64 pt-10'>
                                <div>
                                    <h1 className=" lg:text-7xl text-5xl font-semibold text-lightGray ml-20 "> Scholarship Navigator Platform </h1>

                                    <div>
                                        <div className='w-full h-full bg-secondary absolute z-0 top-[80%]   rounded-tr-full'>
                                            <h1 className=" lg:text-5xl flex items-center text-3xl font-semibold  lg:ml-20 mt-10">30% Off for Winter

                                            </h1>

                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className='flex-1'>
                                <motion.div
                                    whileInView={{ scale: [1, 0.9, 1] }}
                                    transition={{ delay: 1, duration: 5, repeat: Infinity }}
                                    animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
                                >
                                    <img className='w-full  rounded-2xl  max-h-[80vh] object-cover ' src="https://i.ibb.co.com/M1QT7LY/prsentSm.png" alt="" />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='  backdrop-blur-md h-[85vh] bg-black/20   '>

                        <img className='w-full h-full max-h-[100vh] object-cover ' src="https://i.ibb.co.com/twXryhRx/Blue-and-White-Modern-Study-Abroad-Program-Banner-Landscape.png" alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='  backdrop-blur-md h-[85vh] bg-white/20   '>

                        <div className=''>
                            {/* <div className='flex-1'>
                                <h1 className="  text-[#1A1A1A] ">   </h1>
                                <div className='App   lg:text-7xl  ml-20 lg:mt-56 text-2xl '>
                                    <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'bold' }}>
                                        Plan with   <br /> {' '}
                                        <span style={{ color: '#827717', fontWeight: 'bold' }}>
                                            {/* Style will be inherited from the parent element 
                                            <Typewriter
                                                words={[
                                                    'Confidence 🤩',
                                                    'money 💸',
                                                    'Family 👨‍👩‍👧‍👦',

                                                ]}
                                                loop={1}
                                                cursor
                                                cursorStyle='_'
                                                typeSpeed={100}
                                                deleteSpeed={40}
                                                delaySpeed={1000}
                                            // onLoopDone={handleDone}
                                            // onType={handleType}
                                            />
                                        </span>
                                    </h1>
                                </div>

                            </div> */}

                            <img className='w-full max-h-[85vh] h-full object-cover ' src="https://i.ibb.co.com/Jc2qpw4/woman-in-wheelchair-working-800x450.jpg" alt="" />

                        </div>

                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;