'use client'

import { Container } from "react-bootstrap"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import Image from "next/image";
import { CiSearch,CiHeart } from "react-icons/ci";
import {  PiShoppingCartThin } from "react-icons/pi";





export default function Productcomponent({ products }: any) {

  return (
    // <Container className="mt-4">
    //   <Swiper
    //     modules={[Navigation, Pagination, Autoplay]}
    //     slidesPerGroup={5}
    //     slidesPerView={5}
    //     spaceBetween={20}
    //     navigation
    //     pagination={{ clickable: true }}
    //     autoplay={{ delay: 5000 }}
    //     speed={1000}
    //     className="pb-5"
    //   >

    //     {products.map((product: any) => (
    //       <SwiperSlide key={product.id} className="text-center product-grid">
    //           <Image alt={"beauty-new-arrivals"}  src={product.images[0].src} className={`product-image mt-1 ${product.images.length > 1?(`gallery`):(``)}`} width={0} height={0} sizes="100vw"/>
    //           {product.images.length > 1?(<Image alt={"image-gallery"}  src={product.images[1].src} className="product-image mt-1 gallery-pic" width={0} height={0} sizes="100vw"/>):(<></>)}
    //            <h4 className="fse-6 fw-3 productname">{product.name}</h4>
    //            <div className="text-center">{product.regular_price === "" ?(<>
    //            <s className="fse-7">{product.price * 2 }AED</s>
    //            <span className="fse-5 fw-3 ms-1">{product.price}AED</span></>):(<><s className="fse-7">{product.regular_price }AED</s>
    //            <span className="fse-5 fw-3 ms-1">{product.sale_price}AED</span></>)}
    //            </div>
    //            <button className="text-center fse-7 btn-add_cart border-transparent mt-2"><p className="mb-0">ADD TO CART</p><PiShoppingCartThin className="fse-4 addcart-icon"/></button> 
    //            <Image src="https://www.okkabeauty.com/wp-content/uploads/2023/04/176-1766215_transparent-sale-badge.png" alt={"sale"} width={60} height={50} className="sale bg-white"/>
    //            <div className="product-icons p-2  bg-white">
    //            <div><CiSearch className="fse-4 mb-3"/></div>
    //           <div><CiHeart  className="fse-4 "/></div>
    //            </div>
    //       </SwiperSlide>
    //     ))}
    //   </Swiper>
    // </Container>
    <></>
  )
}  