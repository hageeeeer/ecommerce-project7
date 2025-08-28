'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import slider1 from '../../assets/images/slider-image-1.jpeg'
import slider2 from '../../assets/images/slider-image-2.jpeg'
import slider3 from '../../assets/images/slider-image-3.jpeg'
import blog1 from '../../assets/images/blog-img-1.jpeg'
import blog2 from '../../assets/images/blog-img-2.jpeg'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import Image from 'next/image'

export default function Slider() {
    return (
        <div className="md:flex hidden">
            <div className="w-3/4 relative">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    slidesPerView={1}
                    pagination={{ 
                        clickable: true,
                        dynamicBullets: true 
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    className="h-[400px]"
                >
                    <SwiperSlide>
                        <Image 
                            className="w-full h-[400px] object-cover" 
                            alt="Slider image 1" 
                            src={slider1}
                            priority
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image 
                            className="w-full h-[400px] object-cover" 
                            alt="Slider image 2" 
                            src={slider2}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image 
                            className="w-full h-[400px] object-cover" 
                            alt="Slider image 3" 
                            src={slider3}
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="w-1/4">
                <Image 
                    className="w-full h-[200px] object-cover" 
                    alt="Blog image 1" 
                    src={blog1}
                />
                <Image 
                    className="w-full h-[200px] object-cover" 
                    alt="Blog image 2" 
                    src={blog2}
                />
            </div>
        </div>
    )
}