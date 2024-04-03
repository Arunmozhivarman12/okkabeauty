import { Col, Container, Row } from "react-bootstrap";
import Image from "next/image";





async function fetchPosts() {
    const siteUrl = process.env.WORDPRESS_SITE_URL;
    const username = process.env.REST_API_USERNAME;
    const password = process.env.REST_API_PASSWORD;

    const res = await fetch(`${siteUrl}/wp-json/wp/v2/posts?per_page=100`, {
        cache: 'no-store',
        headers: {
            Authorization: `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`
        }

    })
    const data = await res.json();
    return data;
}



export default async function Blogs() {

    const Posts = await fetchPosts();
    

    return (
        <>
            <Container fluid >
                <Row>
                    {/* {Posts.map((post:any) => (
                        <p>{post.title.rendered}</p>
                    ))} */}
                </Row>
            </Container>
        </>
    )
}