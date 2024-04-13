
import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import dynamic from "next/dynamic";
const BlogComponent = dynamic(() => import('./BlogComponent'), { ssr: false })





async function fetchPosts() {
    const siteUrl = process.env.WORDPRESS_SITE_URL;
    const username = process.env.REST_API_USERNAME;
    const password = process.env.REST_API_PASSWORD;

    const res = await fetch(`${siteUrl}/wp-json/wp/v2/posts?per_page=20&_fields=id,date,title,content,yoast_head_json,excerpt`, {
        cache: 'no-store',
        headers: {
            Authorization: `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`
        }

    })
    const data = await res.json();
    return data;
}



export default async function Blogs() {

    const posts = await fetchPosts();
    

    return (
        <>
           <BlogComponent posts={posts}/>
        </>
    )
}