// pages/index.js
import HeroSection from "../components/HeroSection";
import PostmanOilCategories from "../components/PostmanOilCategories";
import HowOilIsMade from "../components/HowOilIsMade";
import FeaturedProducts from "../components/FeaturedProducts";
import AboutUsSection from "../components/AboutUsSection";
import WhyChoosePostman from "../components/WhyChoosePostman";
import CustomerReviews from "../components/CustomerReviews";
import PostmanRecipes from "../components/PostmanRecipes";
import ContactForms from "../components/ContactForms";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PostmanOilCategories />
      <HowOilIsMade />
      <FeaturedProducts />
      <AboutUsSection />
      <WhyChoosePostman />
      <CustomerReviews />
      <PostmanRecipes />
      <ContactForms />
    </>
  );
}