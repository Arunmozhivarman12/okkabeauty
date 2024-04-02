import BeautyBestSellers from "./components/BeautyBestSellers";
import Beauty from "./components/BeautyNewarrivals";
import Fashion from "./components/FashionNewarrivals";
import HomeBanner from "./components/Home-banner";
import { SkinRoutine } from "./components/SkinRoutine";
import Trending from "./components/Trending-brands";
import Promobanner from "./components/productPromoBanner";
import Price from "./components/underprice-banner";



// async function fetchPage() {



//   const res = await fetch("https://okkabeauty.com/wp-json/wp/v2/pages/1006", { cache: 'no-store' })
//   const data = await res.json();
//   return data;
// }



export default async function Home() {
  // const PageData = await fetchPage();


  return (
    <main >
      <HomeBanner />
      <SkinRoutine/>
      <Trending/>
      <Beauty/>
      <Fashion/>
      <Price/>
      <BeautyBestSellers/>
      <Promobanner/>
    </main>
  );
}


