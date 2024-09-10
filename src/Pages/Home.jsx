import "./pages-styles/home.css";

import Main from "./home-page-sections/Main";
import Quote from "./home-page-sections/Quote";
import Programs from "./home-page-sections/Programs"
import WhyUs from "./home-page-sections/WhyUs";
import UnderQuote from "./home-page-sections/UnderQuote";
import QuoteImage from "../Components/QuoteImage";

export default function Home() {
    return (
        <>
            <Main />
            {/* <Quote />
            <UnderQuote /> */}
            <QuoteImage />
            <WhyUs />
            <Programs />
        </>
    );
}