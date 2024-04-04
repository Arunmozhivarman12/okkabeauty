'use client'

import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';




export default  function BlogComponent({posts}:any) {

    

    return (
        <>
            <Container >
            <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerGroup={5}
        slidesPerView={5}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        speed={1000}
        className="pb-5"
      >
                    {posts.map((post:any) => (
                        <SwiperSlide key={post.id} className="text-center">{post.title.rendered}</SwiperSlide>
                    ))}
               </Swiper>
            </Container>
        </>
    )
}