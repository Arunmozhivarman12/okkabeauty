import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import Productcomponent from "./ProductComponent";
import { Container } from "react-bootstrap";




// https://okkabeauty.com/wp-json/wc/v3/products?category=1179&_fields=id,name,regular_price,sale_price,images&per_page=45&status=publish&stock_status=instock
const api = new WooCommerceRestApi({
    url: process.env.WORDPRESS_SITE_URL as string,
    consumerKey: process.env.CONSUMER_KEY as string,
    consumerSecret: process.env.CONSUMER_SECRET as string,
    version: "wc/v3"
});

async function fetchProducts() {

    const fieldsToFetch = [
        'id',
        'name',
        'price',
        'regular_price',
        'sale_price',
        'images',
    ];

    const res = await api.get("products", { per_page: 45, status: "publish", stock_status: "instock", fields: fieldsToFetch.join(','), category: 535 })
    const data = await res.data;
    return data;
}


export default async function BeautyBestSellers() {
    const products = await fetchProducts();
 
    return (
        <Container className="mt-5">

<h2 className="fse-4 fw-4 text-center">BEAUTY BEST SELLERS</h2>
            <Productcomponent products={products}/>
        </Container>
    )
} 