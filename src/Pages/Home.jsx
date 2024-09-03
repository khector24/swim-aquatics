import "./pages-styles/home.css";

import Main from "./home-page-sections/Main";
import Quote from "./home-page-sections/Quote";
import Programs from "./home-page-sections/Programs"
import WhyUs from "./home-page-sections/WhyUs";

export default function Home() {
    return (
        <>
            <Main />
            <Quote />
            <Programs />
            <WhyUs />
        </>
    );
}