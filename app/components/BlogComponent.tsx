'use client'

import {  Container } from "react-bootstrap";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { GoShareAndroid } from "react-icons/go";
import Link from "next/link";








export default function BlogComponent({ posts }: any) {

    const imageNames = [
        'girl-removing-make-up-2022-04-06-04-39-49-utc.jpg',
        'Picture1-3.png',
        'Picture1-2.png',
        'okk1.png'
    ];

    const checkImage = (url:any, imageNames:any) => {
        const imageNamesRegex = imageNames.join('|'); 
        const imageFilesRegex = new RegExp(`(${imageNamesRegex})`, 'i'); 
        return url.match(imageFilesRegex);
    }
   

    const getDate = (postDate: string) => {
        const slicedDate = postDate.slice(0, 10);
        const newDate = new Date(slicedDate);
        const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

        return {
            date:newDate.getDate(),
            month:months[newDate.getMonth()]
        };
    }

    return (
        <>
            <Container className="mt-5" >
                <h2 className="fse-4 fw-4 text-center">OKKA MAGAZINE</h2>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerGroup={4}
                    slidesPerView={4}
                    spaceBetween={20}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000 }}
                    speed={1000}
                    className="pb-5 mt-4"
                >
                    {posts.map((post: any) => (
                        <SwiperSlide key={post.id} className="text-center">
                            <div className="border-border">
                            {checkImage(post.yoast_head_json.og_image[0].url,imageNames)?(<></>):( <div className="blog-img-wrapper">
                                    <Image src={post.yoast_head_json.og_image[0].url} alt={"blog image"} width={0} height={0} sizes="100vw" className="blog-image"  />
                                    <div className="postdate bg-white">
                                        <p className="mb-0 fse-4 fw-1">{getDate(post.date).date}</p>
                                        <p className="mb-0 fse-7">{getDate(post.date).month}</p>
                                    </div>
                                </div>)}

                               
                                <div className="p-4">
                                    <h4 dangerouslySetInnerHTML={{ __html: post.title.rendered }} className="fse-m lh-3"></h4>
                                    <GoShareAndroid className="text-grey2" />
                                    <p suppressHydrationWarning={true} dangerouslySetInnerHTML={{ __html: post.excerpt.rendered.replace(/\[vc_row\]\[vc_column\]\[vc_column_text woodmart_inline=&#8221;no&#8221; text_larger=&#8221;no&#8221;\]/g, '') }} className="fse-7 text-lightblue lh-5 mt-1"></p>
                                    <Link href="/" className="fse-7 text-Primary">CONTINUE READING</Link>
                                    
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </>
    )
}

