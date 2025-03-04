import "../pages-styles/home-sections.css/main.css"
import backgroundImage from "../../assets/images/background-image.jpg";
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-scroll';
import { useOutletContext } from 'react-router-dom';


export default function Main() {
    // Access the context
    const { onNewsletterClick } = useOutletContext();

    return (
        <section className="main-content" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="content">
                <h1>
                    SPLASH-<span className="zone-highlight">ZONE</span> AQUATICS
                </h1>
                <p className="content-description">
                    Let your child dive into the world of swimming
                    and discover a lifetime of joy
                    and confidence in the water.
                </p>
                <div className="button-container">
                    <Button
                        variant="contained"
                        color="primary"
                        className="custon-button"
                    >
                        <Link
                            to="programs-section"
                            smooth="true"
                            duration={500}>
                            Programs
                        </Link>
                    </Button>
                    <Button
                        className="custon-button"
                        onClick={onNewsletterClick}
                        smooth="true" duration={500}
                    >
                        Newsletter
                    </Button>
                </div>
            </div>
        </section>
    );
}

// import "../pages-styles/home-sections.css/main.css"
// import backgroundImage from "../../assets/images/background-image.jpg";
// import { Box, Typography, Button } from '@mui/material';
// import { Link } from 'react-scroll';
// import { useOutletContext } from 'react-router-dom';


// export default function Main() {
//     const { onNewsletterClick } = useOutletContext(); // Access the context

//     return (
//         <section className="main-content" style={{ backgroundImage: `url(${backgroundImage})` }}>
//             <div className="content">
//                 <Typography variant="h1" component="h1">
//                     SPLASH ZONE
//                     <br />
//                     AQUATICS
//                 </Typography>
//                 {/* <div className="description"> */}
//                 <Typography variant="body1" component="p">
//                     Let your child dive into the world of swimming

//                     and discover a lifetime of joy

//                     and confidence in the water.
//                 </Typography>
//                 {/* </div> */}
//                 <Button
//                     variant="contained"
//                     color="primary"
//                     className="explore-button"
//                 >
//                     <Link to="programs-section" smooth="true" duration={500} style={{ color: 'white', textDecoration: 'none' }}>
//                         Explore Programs
//                     </Link>
//                 </Button>
//                 <Button onClick={onNewsletterClick} smooth="true" duration={500} style={{ color: 'white', textDecoration: 'none', }}>
//                     Newsletter
//                 </Button>
//             </div>
//         </section>
//     );
// }