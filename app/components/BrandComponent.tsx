'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Container } from 'react-bootstrap';
import Image from 'next/image';




export default function BrandComponent({ category }: any) {
    return (
        <Container>
            <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerGroup={1}
                slidesPerView={7}
                spaceBetween={20}
                navigation
                autoplay={{ delay: 5000 }}
                speed={1000}
                className="pb-5 mt-4"

            >
                {category.filter((cat: any) => cat.parent === 72).map((cat: any) => (

                    <div key={cat.id}>
                        {
                            cat.image !== null && (
                                <SwiperSlide><Image src={cat.image.src} alt="brand" width={100} height={100} className='d-block m-auto'/> </SwiperSlide>

                            )
                        }
                        </div>
                ))}

                    </Swiper>
            
        </Container>
    )
}