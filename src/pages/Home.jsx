import Navigation from "../components/navigation";
import Header from "../components/Home/header";
import Products from "../components/Home/products";
import FrequentlyAsked from "../components/Home/faq";
import Newsletter from "../components/Home/newsletter";
import { useState, useEffect } from "react";
import CarouselSection from "../components/Home/carouselsection";
import ContactInfo from "../components/Home/contactinfo";
import SignFooter from "../components/Signin/footer";

export default function Home({ isSignedIn, handleLogout }) {
  const [search, setSearch] = useState("");
  const images = [
    {
      src: "https://lcdn.altex.ro/resize/media/catalog/product/t/e/2bd48d28d1c32adea0e55139a4e6434a/telefon_samsung_galaxy_s23_ultra_phantom_black_01_d653fc35.jpg",
      alt: "S23 Ultra image",
      name: "Samsung Galaxy S23 Ultra",
      text: "Released on February 17, 2023",
      additional: "One of the best smartphones of Samsung",
    },
    {
      src: "https://lcdn.altex.ro/resize/media/catalog/product/i/p/2bd48d28d1c32adea0e55139a4e6434a/iphone_14_pro_gold-1_6d712f47.jpg",
      alt: "IPhone 14 Pro Max",
      name: "IPhone 14 Pro Max",
      text: "Released on September 16, 2022",
      additional: "Introduced the new Dynamic Island",
    },
    {
      src: "https://lcdn.altex.ro/resize/media/catalog/product/t/e/2bd48d28d1c32adea0e55139a4e6434a/telefon_samsung_galaxy_s24_ultra_5g_titanium_black_01_0b110de8.jpg",
      alt: "Samsung Galaxy S24 Ultra",
      name: "Samsung Galaxy S24 Ultra",
      text: "Released on January 17, 2024",
      additional: "Currently the best device of Samsung",
    },
    {
      src: "https://lcdn.altex.ro/resize/media/catalog/product/i/p/2bd48d28d1c32adea0e55139a4e6434a/iphone_15_pro_max_black_titanium_pdp_image_position_1_wwen_3077b3ce.jpg",
      alt: "IPhone 15 Pro Max",
      name: "IPhone 15 Pro Max",
      text: "Released on September 22, 2023",
      additional: "Introduced the A17 Pro chip",
    },
  ];
  return (
    <>
      <Navigation isSignedIn={isSignedIn} handleLogout={handleLogout} />
      <Header setSearch={setSearch} search={search} />
      <Products setSearch={setSearch} search={search} />
      <FrequentlyAsked />
      <Newsletter />
      <CarouselSection images={images} />
      <ContactInfo />
    </>
  );
}
