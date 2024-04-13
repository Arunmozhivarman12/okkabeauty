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
        'price'
    ];

    const res = await api.get("products", { per_page: 45, status: "publish", stock_status: "instock", fields: fieldsToFetch.join(','), category: 1179 })
    const data = await res.data;
    return data;
}



// let allProducts: any = [];
// let page = 1;
// let totalpages = 1;

// while (page <= totalpages) {
//   const response = await api.get("products", { per_page: 45, page });
//   const productsdata = response.data;


//   productsdata.map((product: any) => {
//     allProducts.push(product)
//   })

//   if (response.headers['x-wp-totalpages']) {
//     totalpages = parseInt(response.headers['x-wp-totalpages']);
//   }

//   page++;

// }

// const skincareCategory = allProducts.filter((category : any) => category.parent === 68)

export default async function Beauty() {
    const products = await fetchProducts();
 
    return (
        <Container className="mt-4">

<h2 className="fse-4 fw-4 text-center">BEAUTY NEW ARRIVALS</h2>
            <Productcomponent products={products}/>
        </Container>
    )
} 