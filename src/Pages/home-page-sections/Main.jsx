import "../pages-styles/home-sections.css/main.css"
import backgroundImage from "../../assets/images/background-image.jpg";
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-scroll';

export default function Main() {
    return (
        <section className="main-content" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="content">
                <Typography variant="h1" component="h1">
                    SPLASH ZONE
                    <br />
                    AQUATICS
                </Typography>
                {/* <div className="description"> */}
                <Typography variant="body1" component="p">
                    Let your child dive into the world of swimming

                    and discover a lifetime of joy

                    and confidence in the water.
                </Typography>
                {/* </div> */}
                <Button
                    variant="contained"
                    color="primary"
                    className="explore-button"
                >
                    <Link to="programs-section" smooth={true} duration={500} style={{ color: 'white', textDecoration: 'none' }}>
                        Explore Programs
                    </Link>
                </Button>
            </div>
        </section>
    );
}