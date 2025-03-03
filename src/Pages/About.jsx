import { Card, CardContent, Typography, Stack } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import './pages-styles/about.css';
import NavigationDiv from '../Components/NavigationDiv';
import TableOfContent from '../Components/TableOfContent';
import InstructorProfile from '../Components/InstructorProfile';
import { useOutletContext } from 'react-router-dom';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';


const instructors = [
    {
        name: "Ethan",
        description: "As the owner and operator, Ethan is not only an expert swimmer but also a friendly and patient instructor. With years of experience, he has a deep passion for teaching kids to swim and fostering a love for the water.",
        img: "/src/assets/images/instructorImages/Ethan.jpg"
    },
    {
        name: "Ben",
        description: "An enthusiastic instructor, Ben brings a sense of fun and adventure to every swimming class.His love for teaching and dedication to water safety make him a valuable asset to our team.",
        img: "/src/assets/images/instructorImages/Ben.jpeg"
    },
    {
        name: "Bailey",
        description: "With her warm and encouraging nature, Bailey creates a nurturing environment for children to build their confidence in the water. Her creativity ensures that each lesson is engaging and enjoyable.",
        img: "/src/assets/images/instructorImages/Blank-Profile.png"
    },
    {
        name: "Steve",
        description: "As a patient and attentive instructor, Steve focuses on individual progress and tailors lessons to each child's needs. His experience in competitive swimming brings a wealth of knowledge to our programs.",
        img: "/src/assets/images/instructorImages/Blank-Profile.png"
    },
];

const whatWeOffer = [
    "A wide variety of different program options and swim packages",
    "An emotional and intellectually stimulating environment",
    "Safety and supervision at all times",
];

const whatStudentsReceive = [
    "Constant encouragement",
    "Fun-filled games",
    "Relaxed & Fun Atmosphere",
    "A Safe Environment At All Times",
];
export default function About() {
    const { onContactClick } = useOutletContext();

    return (
        <section className="about-us">
            <div className="content">
                <div className="title">
                    <Typography variant="h1" style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                        About Us
                    </Typography>
                    <Typography variant="body1" style={{ fontSize: "1.2rem", marginBottom: "1.5rem" }}>
                        Splash Zone Aquatics is a passionate team
                        dedicated to providing exceptional aquatic swimming
                        classes and programs for children, ages 5 months and up.
                        Led by Ethan, the owner and an experienced swim
                        instructor, we are committed to helping your child
                        develop essential life skills and become the best swimmer
                        they can be.
                    </Typography>
                </div>

                <div className="middle-content">
                    <div id="philosophy" className="philosophy">
                        <h2 className="mt-4">Our Philosophy</h2>
                        <Typography variant="body1" style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
                            At Splash Zone Aquatics, our philosophy revolves around
                            creating an inviting and safe space where kids can
                            overcome their fears and embrace the joy of swimming.
                            Our dedicated team of instructors is committed to
                            fostering a love for swimming and empowering children with
                            essential water skills that will stay with them for life.
                        </Typography>
                    </div>
                    <div className="leader-section">
                        <h2>Meet Our Leader</h2>
                        {/* <Carousel
                            navButtonsAlwaysVisible
                            indicators={false}
                            autoPlay={false}
                            animation="slide"
                        >
                            {instructors.map((instructor, index) => (
                                <InstructorProfile
                                    key={index}
                                    name={instructor.name}
                                    description={instructor.description}
                                    img={instructor.img}
                                />
                            ))}
                        </Carousel> */}
                        <Card
                            className='leader-card'
                            sx={{ display: 'flex', alignItems: 'center' }}>
                            <CardMedia
                                component="img"
                                sx={{ width: 300, height: 300, objectFit: 'cover', borderRadius: '8px' }}
                                image="https://s3.us-east-1.amazonaws.com/splashzoneaquatics.com/splash-zone-images/instructor-images/Ethan.jpg"
                                alt="Ethan"
                            />
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    flexGrow: 1
                                }}
                            >
                                <CardContent
                                    sx={{ flex: '1 0 auto' }}
                                >
                                    <Typography
                                        className='leader-card-name'
                                        component="div" variant="h5"
                                    >
                                        Ethan Goya
                                    </Typography>
                                    <Typography
                                        sx={{ color: 'text.secondary' }}
                                        variant="subtitle1"
                                        component="div"
                                        className='leader-card-description'
                                    >
                                        As the owner and operator, Ethan is not only an expert swimmer but also a friendly and patient instructor.
                                        With years of experience, he has a deep passion for teaching kids to swim and fostering a love for the water.
                                        He also mentors fellow instructors, ensuring a structured and engaging learning environment where children thrive with confidence.
                                    </Typography>
                                </CardContent>
                            </Box>
                        </Card>

                    </div>
                </div>

                <div className="student-offers">
                    <div id="what-we-offer" className="offers">
                        <h2>What We Offer</h2>
                        <Stack spacing={2}>
                            {whatWeOffer.map((offer, index) => (
                                <Card className="card" style={{ backgroundColor: "#4F75FF" }} key={index}>
                                    <CardContent>
                                        <Typography style={{ color: "white" }} variant="h6">{offer}</Typography>
                                    </CardContent>
                                </Card>
                            ))}
                        </Stack>
                    </div>

                    <div id="student-benefits" className="students">
                        <h2>What Students Receive</h2>
                        <Stack spacing={2}>
                            {whatStudentsReceive.map((benefit, index) => (
                                <Card className="card" style={{ backgroundColor: "#4F75FF" }} key={index}>
                                    <CardContent>
                                        <Typography style={{ color: "white" }} variant="h6">{benefit}</Typography>
                                    </CardContent>
                                </Card>
                            ))}
                        </Stack>
                    </div>
                </div>
            </div>
            <div className="side-navigation">
                <TableOfContent />
                <div className="navigation">
                    <NavigationDiv
                        to="/faq"
                        label={"Any Questions?"}
                        img="https://s3.us-east-1.amazonaws.com/splashzoneaquatics.com/splash-zone-images/navigation-div-images/father-son.webp"
                    // onClick={onContactClick} // Pass the function here
                    />
                    <NavigationDiv
                        // to="/contact"
                        label={"Contact Us!"}
                        img="https://s3.us-east-1.amazonaws.com/splashzoneaquatics.com/splash-zone-images/navigation-div-images/kid-mother.avif"
                        onClick={onContactClick} // Pass the function here
                    />
                </div>
            </div>
        </section >
    );
}


// export default function About() {
//     return (
//         <section className="about-us">
//             <div className="content">
//                 <div className="title">
//                     <Typography variant="h1" style={{ fontSize: "3rem", marginBottom: "1rem" }}>
//                         About Us
//                     </Typography>
//                     <Typography variant="body1" style={{ fontSize: "1.2rem", marginBottom: "1.5rem" }}>
//                         Splash Zone Aquatics is a passionate team
//                         dedicated to providing exceptional aquatic swimming
//                         classes and programs for children, ages 5 months and up.
//                         Led by Ethan, the owner and an experienced swim
//                         instructor, we are committed to helping your child
//                         develop essential life skills and become the best swimmer
//                         they can be.
//                     </Typography>
//                 </div>

//                 <div className="middle-content">
//                     <div id="philosophy" className="philosophy">
//                         <h2 className="mt-4">Our Philosophy</h2>
//                         <Typography variant="body1" style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
//                             At Splash Zone Aquatics, our philosophy revolves around
//                             creating an inviting and safe space where kids can
//                             overcome their fears and embrace the joy of swimming.
//                             Our dedicated team of instructors is committed to
//                             fostering a love for swimming and empowering children with
//                             essential water skills that will stay with them for life.
//                         </Typography>
//                     </div>
//                     <div className="carousel">
//                         <h2>Meet Our Instructors</h2>
//                         <Carousel
//                             navButtonsAlwaysVisible
//                             indicators={false}
//                             autoPlay={false}
//                             animation="slide"
//                         >
//                             {instructors.map((instructor, index) => (
//                                 <InstructorProfile
//                                     key={index}
//                                     name={instructor.name}
//                                     description={instructor.description}
//                                     img={instructor.img}
//                                 />
//                             ))}
//                         </Carousel>
//                     </div>
//                 </div>

//                 <div className="student-offers">
//                     <div id="what-we-offer" className="offers">
//                         <h2>What We Offer</h2>
//                         <Stack spacing={2}>
//                             {whatWeOffer.map((offer, index) => (
//                                 <Card className="card" style={{ backgroundColor: "#4F75FF" }} key={index}>
//                                     <CardContent>
//                                         <Typography style={{ color: "white" }} variant="h6">{offer}</Typography>
//                                     </CardContent>
//                                 </Card>
//                             ))}
//                         </Stack>
//                     </div>

//                     <div id="student-benefits" className="students">
//                         <h2>What Students Receive</h2>
//                         <Stack spacing={2}>
//                             {whatStudentsReceive.map((benefit, index) => (
//                                 <Card className="card" style={{ backgroundColor: "#4F75FF" }} key={index}>
//                                     <CardContent>
//                                         <Typography style={{ color: "white" }} variant="h6">{benefit}</Typography>
//                                     </CardContent>
//                                 </Card>
//                             ))}
//                         </Stack>
//                     </div>
//                 </div>
//             </div>
//             <div className="side-navigation">
//                 <TableOfContent />
//                 <div className="navigation">
//                     <NavigationDiv
//                         to="/faq"
//                         label={"Any Questions?"}
//                         img="/src/assets/images/father-son.webp"
//                     />
//                     <NavigationDiv
//                         to="/contact"
//                         label={"Contact Us!"}
//                         img="/src/assets/images/kid-mother.avif"
//                     />
//                 </div>
//             </div>
//         </section >
//     );
// }



// function InstructorProfile({ name, description, img }) {
//     return (
//         <div className="instructor-profile">
//             <div className="profile-container">
//                 <img src={img} alt={`${name} - Swim Instructor`} className="rounded-circle" />
//                 <div className="profile-description">
//                     <strong>{name}:</strong> {description}
//                 </div>
//             </div>
//         </div>
//     );
// }




// import { color } from "@mui/system";
// // import "./pages-styles/about.css"

// export default function About() {
//     return (
//         <main>
//             <section id="about-us" className="py-4">
//                 <div className="container mb-3">
//                     <h1>About Us</h1>
//                     <p>Splash Zone Aquatics is a passionate team dedicated to providing exceptional aquatic swimming classes and programs for children, ages 5 months and up. Led by Ethan, the owner and an experienced swim instructor, we are committed to helping your child develop essential life skills and become the best swimmer they can be.</p>

//                     <h2 className="mt-4">Meet Our Instructors</h2>
//                     <p>At Splash Zone Aquatics, we take pride in our team of highly qualified and caring instructors:</p>
//                     <ul className="list-group">
//                         <li className="list-group-item">
//                             <div className="container">
//                                 <div className="row">
//                                     <div className="col-md-2">
//                                         <img src="/images/Ethan.jpg" alt="Ethan - Swim Instructor" className="rounded-circle" />
//                                     </div>
//                                     <div className="col-md-10">
//                                         <strong>Ethan:</strong> As the owner and operator, Ethan is not only an expert swimmer but also a friendly and patient instructor. With years of experience, he has a deep passion for teaching kids to swim and fostering a love for the water.
//                                     </div>
//                                 </div>
//                             </div>
//                         </li>
//                         <li className="list-group-item">
//                             <div className="container">
//                                 <div className="row">
//                                     <div className="col-md-10">
//                                         <strong>Ben:</strong> An enthusiastic instructor, Ben brings a sense of fun and adventure to every swimming class. His love for teaching and dedication to water safety make him a valuable asset to our team.
//                                     </div>
//                                     <div className="col-md-2">
//                                         <img src="/images/Ben.jpeg" alt="Ben - Swim Instructor" className="rounded-circle" />
//                                     </div>
//                                 </div>
//                             </div>
//                         </li>
//                         <li className="list-group-item">
//                             <div className="container">
//                                 <div className="row">
//                                     <div className="col-md-2">
//                                         <img src="/images/Blank-Profile.png" alt="Bailey - Swim Instructor" className="rounded-circle" />
//                                     </div>
//                                     <div className="col-md-10">
//                                         <strong>Bailey:</strong> With her warm and encouraging nature, Bailey creates a nurturing environment for children to build their confidence in the water. Her creativity ensures that each lesson is engaging and enjoyable.
//                                     </div>
//                                 </div>
//                             </div>
//                         </li>
//                         <li className="list-group-item">
//                             <div className="container">
//                                 <div className="row">
//                                     <div className="col-md-10">
//                                         <strong>Steve:</strong> As a patient and attentive instructor, Steve focuses on individual progress and tailors lessons to each child's needs. His experience in competitive swimming brings a wealth of knowledge to our programs.
//                                     </div>
//                                     <div className="col-md-2">
//                                         <img src="/images/Blank-Profile.png" alt="Steve - Swim Instructor" className="rounded-circle" />
//                                     </div>
//                                 </div>
//                             </div>
//                         </li>
//                     </ul>

//                     <h2 className="mt-4">What We Offer</h2>
//                     <ul className="list-group">
//                         <li className="list-group-item">A wide variety of different program options and swim packages</li>
//                         <li className="list-group-item">An emotional and intellectually stimulating environment</li>
//                         <li className="list-group-item">Safety and supervision at all times</li>
//                     </ul>

//                     <h2 className="mt-4">What Students Receive</h2>
//                     <ul className="list-group">
//                         <li className="list-group-item">Constant encouragement</li>
//                         <li className="list-group-item">Fun-filled games</li>
//                         <li className="list-group-item">Relaxed & Fun Atmosphere</li>
//                         <li className="list-group-item">A Safe Environment At All Times</li>
//                     </ul>
//                 </div>
//             </section>
//         </main>
//     );
// }


// <div className="offers">
//                     <h2>What We Offer</h2>
//                     <Grid2 container spacing={2}>
//                         {whatWeOffer.map((offer, index) => (
//                             <Grid2 item xs={12} md={4} key={index}>
//                                 <Card>
//                                     <CardContent>
//                                         <Typography variant="h6">{offer}</Typography>
//                                     </CardContent>
//                                 </Card>
//                             </Grid2>
//                         ))}
//                     </Grid2>
//                 </div>

//                 <div className="students">
//                     <h2>What Students Receive</h2>
//                     <Grid2 container spacing={2}>
//                         {whatStudentsReceive.map((benefit, index) => (
//                             <Grid2 item xs={12} md={4} key={index}>
//                                 <Card>
//                                     <CardContent>
//                                         <Typography variant="h6">{benefit}</Typography>
//                                     </CardContent>
//                                 </Card>
//                             </Grid2>
//                         ))}
//                     </Grid2>
//                 </div>