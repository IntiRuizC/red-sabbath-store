import Footer1 from "@/components/footers/Footer1";
import Header1 from "@/components/headers/Header1";
import Topbar from "@/components/headers/Topbar";
import BannerCollection from "@/components/homes/home-1/BannerCollection";
import BannerCountdown from "@/components/homes/home-1/BannerCountdown";
//import Blogs from "@/components/common/Blogs";
import Collections from "@/components/homes/home-1/Collections";
import Features from "@/components/common/Features";
import Hero from "@/components/homes/home-1/Hero";
import Products from "@/components/common/Products3";
import ShopGram from "@/components/common/ShopGram";
import Testimonials from "@/components/common/Testimonials";

export const metadata = {
  title: "Red Sabbath store",
  description: "Red Sabbath store",
};

export default function HomePage() {
  return (
    <>
      <Topbar />
      <Header1 />
      <Hero />
      <Collections />
      <Products />
      <BannerCollection />
      <BannerCountdown />
      <Testimonials />
      {/*<Blogs />*/}
      <ShopGram />
      <Features />
      <Footer1 />
    </>
  );
}
