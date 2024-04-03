import BeautyBestSellers from "./components/BeautyBestSellers";
import Beauty from "./components/BeautyNewarrivals";
import Collagen from "./components/CollagenBanner";
import Deals from "./components/Deals";
import Fashion from "./components/FashionNewarrivals";
import HomeBanner from "./components/Home-banner";
import Blogs from "./components/Magazine";
import { SkinRoutine } from "./components/SkinRoutine";
import SkinType from "./components/SkinTypeBanner";
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
      <Deals/>
      <Collagen/>
      <SkinType/>
      <Blogs/>
    </main>
  );
}


