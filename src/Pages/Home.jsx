// import "../Pages/pages-styles/home-sections.css/home-display-cards.css"

import Main from "./home-page-sections/Main";
import Quote from "./home-page-sections/Quote";
import Programs from "./home-page-sections/Programs"
import WhyUs from "./home-page-sections/WhyUs";
import UnderQuote from "./home-page-sections/UnderQuote";
import QuoteImage from "../Components/QuoteImage";
import HomeCardSection from "./home-page-sections/HomeCardSection";

import SVGExample from "./home-page-sections/SVGExample";

import HomeDisplayCards from "./home-page-sections/HomeDisplayCards";

export default function Home() {
    return (
        <>
            <Main />
            {/* <Quote />
            <UnderQuote /> */}
            {/* <QuoteImage /> */}
            {/* <HomeCardSection /> */}
            {/* <SVGExample /> */}
            <HomeDisplayCards />
            <WhyUs />
            <Programs />
        </>
    );
}