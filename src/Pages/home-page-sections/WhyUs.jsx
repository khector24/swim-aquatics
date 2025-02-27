import { Box, Typography, Paper } from '@mui/material';
import CustomButton from "../../Components/CustomButton";
import "../pages-styles/home-sections.css/why-us.css";

// Data for the cards
const cardData = [
    {
        title: "Professional Swim Instructors",
        description: "Our experienced instructors go through extensive training to provide the expertise and consistency your child needs to thrive in the water.",
        icon: "https://s3.us-east-1.amazonaws.com/splashzoneaquatics.com/assets/icons/whistle.png",
        attribution: <a href="https://www.flaticon.com/free-icons/whistle" title="whistle icons">Whistle icons created by Nikita Golubev - Flaticon</a>
    },
    {
        title: "Time-Saving Flexibility",
        description: "Schedule swim lessons for all your children at the same time, no matter their age or skill level, for ultimate convenience.",
        icon: "https://s3.us-east-1.amazonaws.com/splashzoneaquatics.com/assets/icons/save-time.png",
        attribution: <a href="https://www.flaticon.com/free-icons/save-time" title="save time icons">Save time icons created by Freepik - Flaticon</a>
    }
];

export default function WhyUs() {
    return (
        <Box className="why-us-container" sx={{ textAlign: 'center' }}>
            <Typography className="title heading" variant="h3" component="h2" gutterBottom>
                Why Choose Us?
            </Typography>
            <div className='description'>
                <Typography variant="body1" sx={{ fontSize: "1.2rem", marginBottom: "1.5rem" }}>
                    Our children's swim school empowers kids with the skills they need
                    to feel confident in the water—laying the foundation for a lifetime
                    of enjoyment! Our professional instructors emphasize teamwork by
                    getting into the water with swimmers and adapting lessons to each
                    individual's needs. We're proud to offer programs for all ages, with
                    continuous weekly lessons year-round, so your child can start and
                    stop at any time.
                </Typography>
            </div>

            <Box className="card-container" sx={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginBottom: '30px' }}>
                {cardData.map((card, index) => (
                    <Paper key={index} className="why-us-card" elevation={3} sx={{ padding: '20px', margin: '10px', flex: '1 1 30%' }}>
                        <Typography className="heading" variant="h5" component="h3" gutterBottom>
                            {card.title}
                            <img src={card.icon} alt={card.title} className="card-icon" />
                        </Typography>
                        <Typography variant="body2">
                            {card.description}
                        </Typography>
                    </Paper>
                ))}
            </Box>

            <Typography variant="h6" gutterBottom>
                Learn more about why we believe we are the right teachers for your child!
            </Typography>

            <CustomButton to="/about" label="About Us" />
        </Box>
    );
}





// import "../pages-styles/home-sections.css/why-us.css";
// import CustomButton from "../../Components/CustomButton";

// export default function WhyUs() {
//     return (
//         <div className="why-us">
//             <h2>Why us - We are the best</h2>
//             <p>Our children's swim school empowers kids with the skills
//                 they need to feel confident in the water — laying
//                 the foundation for a lifetime of enjoyment!
//                 Our professional, adult instructors are all about teamwork,
//                 getting into the water with swimmers and adapting lessons
//                 to revolve around each individual. In fact, we're proud
//                 to be the best swim school in the area,
//                 offering programs for all ages, with continuous
//                 weekly lessons available year-round, so your child
//                 can start and stop any time.
//             </p>


//             <div style={{ display: "flex" }}>
//                 <div>
//                     <h2>Professional Swim Instructors</h2>
//                     <p> Our professional kids' swim school instructors
//                         go through extensive training to give your
//                         child the experience and consistency they need.
//                     </p>
//                 </div>

//                 <div>
//                     <h2>Time-Saving Flexibility</h2>
//                     <p>
//                         Schedule all your kids' swim lessons simultaneously,
//                         no matter what age or level.
//                     </p>
//                 </div>

//                 <div>
//                     <h2>Stress-Free Facilities</h2>
//                     <p>
//                         Your child will love our ultra-clean, 90-degree
//                         water while you relax in our carpeted viewing lobby.
//                     </p>
//                 </div>
//             </div>

//             <h4>Learn more about why we beleive we are the right teachers for your child!</h4>
//             <CustomButton to="/about" label="About Us" />
//         </div >
//     );
// }