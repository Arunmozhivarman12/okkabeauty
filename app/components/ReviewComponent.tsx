'use client'

import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { IoIosCheckmarkCircle, IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaStar } from "react-icons/fa";


export default function ReviewComponent({ ratings }: any) {


    function thumbnail(name: string) {
        const names = name.split(" ");
        const firstletters = names.map((name: string) => (name.slice(0, 1)));
        const thumbnail = firstletters.join("")
        return thumbnail;
    }


    function excerpt(comments: string) {
        let sliced = comments.slice(3).slice(0, -5)
        if (sliced.length > 18) {
            return sliced.slice(0, 18) + "..."
        } else {
            return sliced
        }
    }


    const getDate = (postDate: string) => {
        const slicedDate = postDate.slice(0, 10);
        const publicationDate = new Date(slicedDate);
        const currentDate = new Date();

        return (currentDate.getFullYear() - publicationDate.getFullYear()) * 12 +
        (currentDate.getMonth() - publicationDate.getMonth())
    }

    function CreateStars(star: number, id: number) {
        const stars: any = []
        for (let i = 1; i <= star; i++) {
            stars.push(<span key={`star_${id}_${i}`} className="text-warning fse-4 me-2"><FaStar /></span>)
        }
        return stars;
    }




    
    return (
        <Container fluid>
            <Swiper
                modules={[Navigation, Autoplay]}
                slidesPerGroup={1}
                slidesPerView={4}
                spaceBetween={20}
                navigation
                autoplay={{ delay: 5000 }}
                speed={1000}
                className="pb-5 "
            >
                {ratings.map((review: any, index: number) =>  (
                    <SwiperSlide key={review.id} className=" mt-4  border-border p-3">
                        <div className="thumbnail-wrap gap-20 pb-3 bb-border-1">
                            <span className="review-thumbnail bg-border brp-50 fse-m">{thumbnail(review.reviewer)}<IoIosCheckmarkCircle className="verified brp-50" />
                            </span>
                            <div>
                                <h5 className="fse-m text-start mb-0">{review.reviewer}</h5>
                                {review.verified ? (<span className="fse-6 text-grey2"><IoIosCheckmarkCircleOutline className="verified2 brp-50 fse-4" />Verified Owner</span>) : (<span className="fse-6 text-grey2">Reviewer</span>)}
                            </div>
                        </div>
                        <div className="text-start mt-2">{CreateStars(review.rating, review.id)}<span className="text-light-blue fse-m ms-3">{review.rating}/5</span></div>
                        <p className="text-secondary fse-5 text-start mb-0 mt-1">{excerpt(review.review)}</p>
                        {review.review.length < 18 ? (<></>):(<a className="fse-7 text-dark text-start"> show More</a>)}
                        <p className="fse-7 text-grey2 mt-3">{getDate(review.date_created)} months ago</p>
                        <div className="bg-grey p-3 fse-6 fw-4 text-secondary" dangerouslySetInnerHTML={{__html:review.product_name}}></div>
                        <div></div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </Container>
    )
}