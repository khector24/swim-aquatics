import "../pages-styles/home-sections.css/main.css"
import backgroundImage from "../../assets/images/background-image.jpg";

export default function Main() {
    return (
        <section className="image-content" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="text-content">
                <h1>
                    Splash Zone
                    <br />
                    Aquatics
                </h1>
                <p>
                    Let your child dive into the world of swimming
                    <br />
                    and discover a lifetime of joy
                    <br />
                    and confidence in the water.
                </p>
                <button><a href="/programs">Explore Programs</a></button>
            </div>
        </section>
    );
}