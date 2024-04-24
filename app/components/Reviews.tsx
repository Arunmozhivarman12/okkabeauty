import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { Container } from "react-bootstrap";
import dynamic from "next/dynamic";
const ReviewComponent = dynamic(() => import('./ReviewComponent'), { ssr: false })






// https://okkabeauty.com/wp-json/wc/v3/products?category=1179&_fields=id,name,regular_price,sale_price,images&per_page=45&status=publish&stock_status=instock
const api = new WooCommerceRestApi({
    url: process.env.WORDPRESS_SITE_URL as string,
    consumerKey: process.env.CONSUMER_KEY as string,
    consumerSecret: process.env.CONSUMER_SECRET as string,
    version: "wc/v3"
});

async function fetchReviews() {

    const fieldsToFetch = [
        'id',
        'reviewer',
        'verified',
        'rating',
        'date_created',
        'review',
        'product_id',
        'product_name'
    ];

    const res = await api.get("products/reviews", { per_page: 40, status: "approved", fields: fieldsToFetch.join(',') })
    const data = await res.data;
    return data;
}


export default async function CustomerReviews() {
    const reviews = await fetchReviews();

    return (
        <Container fluid className="mt-5">

            <h2 className="fse-4 fw-4 text-center">LET THE CUSTOMER SPEAK ON OUR BEHALF</h2>
            <ReviewComponent ratings={reviews} />
        </Container>
    )
} 