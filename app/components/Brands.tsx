import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import BrandComponent from "./BrandComponent";


const api = new WooCommerceRestApi({
    url: process.env.WORDPRESS_SITE_URL as string,
    consumerKey: process.env.CONSUMER_KEY as string,
    consumerSecret: process.env.CONSUMER_SECRET as string,
    version: "wc/v3"
});

async function fetchCategories() {

    const fieldsToFetch = [
        'id',
        'image'
    ];

    const res = await api.get("products/categories", { per_page: 100, page: 2, fields: fieldsToFetch.join(',') })
    const data = await res.data;
    return data;
}

export default async function Brands() {

    const category = await fetchCategories()
    return (
        <>
            <h2 className="fse-4 fw-4 text-center">EXPLORE OUR BRANDS</h2>

            <BrandComponent category={category} />
        </>
    )
}