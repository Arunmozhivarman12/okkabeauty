import { default as WooCommerceRestApi } from "@woocommerce/woocommerce-rest-api";



const api = new WooCommerceRestApi({
  url: process.env.WORDPRESS_SITE_URL as string,
  consumerKey: process.env.CONSUMER_KEY as string,
  consumerSecret: process.env.CONSUMER_SECRET as string,
  version: "wc/v3"
});

export const getProductsData = async () => {
  const res = await api.get("products", { per_page: 10 });
  return res.data
};


export async function ProductComponent() {
  const products = await getProductsData();

  return (
    <>{products.map((product: any) => (
      <div key={product.id}></div>
    ))}
    </>
  )
}