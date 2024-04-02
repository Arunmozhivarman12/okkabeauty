'use client'

import { default as WooCommerceRestApi } from "@woocommerce/woocommerce-rest-api";
import Image from "next/image";
import banners from "../../data/categories.json";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Container } from "react-bootstrap";



export function SkinRoutine() {


  return (


    <Container className="mt-5 pt-2">
      <h2 className="fse-4 fw-4 text-center">SKIN ROUTINE</h2>
      <Swiper
        modules={[Navigation, Pagination,Autoplay]}
        slidesPerGroup= {3}
        slidesPerView={5}
        navigation
        pagination={{ clickable: true }}
        autoplay={{delay:5000}}
        speed={1000}
        className="pb-5"
      >
        {banners.map((banner: any,) => (

          <SwiperSlide key={banner.id}>
            <Image src={banner.url} alt="banner" width="230" height="230" className="d-block m-auto" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  )
}