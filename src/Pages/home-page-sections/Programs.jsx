import React from 'react';
import { Box, Typography } from '@mui/material';
import CustomButton from '../../Components/CustomButton';
import "../pages-styles/home-sections.css/programs.css";
import { useOutletContext } from 'react-router-dom';
import { useState, useEffect } from 'react';

const programsData = [
    {
        title: "Water Safety",
        description: "Designed for children aged 6 months to 3 years, this program focuses on foundational skills like breath control, back floating, and learning to push off the wall. It prepares young swimmers for independent participation in water activities.",
        icon: "https://s3.us-east-1.amazonaws.com/splashzoneaquatics.com/assets/icons/water-safety.png",
        attributiion: <a href="https://www.flaticon.com/free-icons/life-guard" title="life guard icons">Life guard icons created by Freepik - Flaticon</a>
    },
    {
        title: "Beginner Swim",
        description: "For children aged 3 to 5 years, this program emphasizes developing basic swimming skills such as balance and kicking. Lessons are delivered through fun games, songs, and engaging stories to make learning enjoyable and effective.",
        icon: "https://s3.us-east-1.amazonaws.com/splashzoneaquatics.com/assets/icons/beginner-swim.png",
        attributiion: <a href="https://www.flaticon.com/free-icons/swimming" title="swimming icons">Swimming icons created by Freepik - Flaticon</a>
    },
    {
        title: "Advanced Swim",
        description: "Targeted at children aged 6 and up. This program will focus on developing advanced stroke techniques, water safety, and building swimming proficiency. Swimmers progress based on their development and skill enhancement.",
        icon: "https://s3.us-east-1.amazonaws.com/splashzoneaquatics.com/assets/icons/advanced-swim.png",
        attributiion: <a href="https://www.flaticon.com/free-icons/swimming" title="swimming icons">Swimming icons created by Chattapat - Flaticon</a>
    }
];

const packageData = [
    {
        title: "Package 1",
        totalSessions: "1 session",
        times: [
            "30 min / $45 per session",
            "45 min / $50 per session",
            "60 min / $65 per session"
        ]
    },
    {
        title: "Package 2",
        totalSessions: "5 sessions",
        times: [
            "30 min / $40 (Total: $200 for 5 sessions)",
            "45 min / $45 (Total: $225 for 5 sessions)",
            "60 min / $60 (Total: $300 for 5 sessions)"
        ]
    }
];


export default function Programs() {
    const { onContactClick } = useOutletContext();

    const [showPackages, setShowPackages] = useState(false);

    const handleShowPackages = () => {
        setShowPackages(!showPackages);
    };

    return (
        <Box id="programs-section" className="programs">
            <Typography className="title" variant="h2" component="h2" gutterBottom>
                Our Programs
            </Typography>
            <Typography className="title-description" variant="body1" component="p">
                Explore our wide range of swimming programs designed for children of all ages. We tailor each program based on individual skill levels, fitness, and confidence. Our programs are flexible and not set in stone, allowing us to accommodate each swimmer's unique needs and progress.
            </Typography>
            <Box className="card-container">
                {programsData.map((program, index) => (
                    <Box key={index} className="program-card">
                        <Typography variant="h4" component="h4">
                            {program.title}
                        </Typography>
                        <Typography className="program-card-description" variant="body2" component="p">
                            {program.description}
                        </Typography>
                        <img src={program.icon} alt={program.title} className="program-icon" />
                    </Box>
                ))}
            </Box>

            {/* <div className='toggle-packages-container'>
                {showPackages && (
                    <Box className='toggle-packages'>
                        <Box className="package-container">
                            {packageData.map((pkg, index) => (
                                <Box key={index} className="package-card">
                                    <Typography>{pkg.title}</Typography>
                                    <hr />
                                    <Typography>Total Sessions: {pkg.totalSessions}</Typography>
                                    <ul>
                                        {pkg.times.map((time, i) => (
                                            <p key={i}>{time}</p>
                                        ))}
                                    </ul>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                )}
            </div> */}


            {showPackages && (
                <Box className='toggle-packages'>
                    <Box className="package-container">
                        {packageData.map((pkg, index) => (
                            <Box key={index} className="package-card">
                                <Typography>{pkg.title}</Typography>
                                <hr />
                                <Typography className='pkg-sessions'>Total Sessions: {pkg.totalSessions}</Typography>
                                <ul>
                                    {pkg.times.map((time, i) => (
                                        <p className='pkg-times' key={i}>{time}</p>
                                    ))}
                                </ul>
                            </Box>
                        ))}
                    </Box>
                </Box>
            )}


            <div className='programs-btns-container'>
                <button className='toggle-packages-button' onClick={handleShowPackages}>
                    {!showPackages ? "Show Packages" : "Hide Packages"}
                </button>
                <CustomButton onClick={onContactClick} label="Contact Us" className="contact-button" />
            </div>
        </Box>
    );
}


// import React from 'react';
// import { Box, Typography, Button } from '@mui/material';
// import CustomButton from '../../Components/CustomButton';
// import "../pages-styles/home-sections.css/programs.css";

// export default function Programs() {
//     return (
//         <Box className="programs">
//             <Typography variant="h2" component="h2" gutterBottom>
//                 Our Programs
//             </Typography>
//             <Typography variant="body1" component="p">
//                 Explore our wide range of swimming programs designed for children of all ages. We tailor each program based on individual skill levels, fitness, and confidence. Our programs are flexible and not set in stone, allowing us to accommodate each swimmer's unique needs and progress.
//             </Typography>
//             <Box className="card-container">
//                 <Box className="program-card">
//                     <Typography variant="h4" component="h4">
//                         Water Safety
//                     </Typography>
//                     <Typography variant="body2" component="p">
//                         Designed for children aged 6 months to 3 years, this program focuses on foundational skills like breath control, back floating, and learning to push off the wall. It prepares young swimmers for independent participation in water activities.
//                     </Typography>
//                 </Box>
//                 <Box className="program-card">
//                     <Typography variant="h4" component="h4">
//                         Beginner Swim
//                     </Typography>
//                     <Typography variant="body2" component="p">
//                         For children aged 3 to 5 years, this program emphasizes developing basic swimming skills such as balance and kicking. Lessons are delivered through fun games, songs, and engaging stories to make learning enjoyable and effective.
//                     </Typography>
//                 </Box>
//                 <Box className="program-card">
//                     <Typography variant="h4" component="h4">
//                         Advanced Swim
//                     </Typography>
//                     <Typography variant="body2" component="p">
//                         Targeted at children aged 6 and up, this program is divided into two levels: Bold Blue and Big Blue. It focuses on advanced stroke techniques, water safety, and building swimming proficiency. Swimmers progress based on their development and skill enhancement.
//                     </Typography>
//                 </Box>
//             </Box>
//             <CustomButton to="/contact" label="Contact Us" className="contact-button" />
//         </Box>
//     );
// }


// import React from 'react';
// import "../pages-styles/home-sections.css/programs.css";
// import CustomButton from '../../Components/CustomButton';

// export default function Programs() {
//     return (
//         <div className="programs">
//             <h2>Our Programs</h2>
//             <p>Explore our wide range of swimming programs designed for children of all ages. We tailor each program based on individual skill levels, fitness, and confidence. Our programs are flexible and not set in stone, allowing us to accommodate each swimmer's unique needs and progress.</p>
//             <div className="card-container">
//                 <div className="program-card">
//                     <h4>Water Safety</h4>
//                     <p>Designed for children aged 6 months to 3 years, this program focuses on foundational skills like breath control, back floating, and learning to push off the wall. It prepares young swimmers for independent participation in water activities.</p>
//                 </div>
//                 <div className="program-card">
//                     <h4>Beginner Swim</h4>
//                     <p>For children aged 3 to 5 years, this program emphasizes developing basic swimming skills such as balance and kicking. Lessons are delivered through fun games, songs, and engaging stories to make learning enjoyable and effective.</p>
//                 </div>
//                 <div className="program-card">
//                     <h4>Advanced Swim</h4>
//                     <p>Targeted at children aged 6 and up, this program is divided into two levels: Bold Blue and Big Blue. It focuses on advanced stroke techniques, water safety, and building swimming proficiency. Swimmers progress based on their development and skill enhancement.</p>
//                 </div>
//             </div>
//             <CustomButton to="/contact" label="Contact Us" className="contact-button" />
//         </div>
//     );
// }


// import React from 'react';
// import "../pages-styles/home-sections.css/programs.css";

// export default function Programs() {
//     return (
//         // Also talk about how we start based on the individual skill 
//         // and fitness, and confidence of the swimmer
//         // these programs are not set in stone
//         <div className="programs">
//             <h2>Our Programs</h2>
//             <p>Explore our wide range of swimming programs for children of all ages.</p>
//             <div className="card-container">
//                 <div className="program-card">
//                     <h4>Water Safety</h4>
//                     <p>For children aged 6 months to 3 years, focusing on breath control, back floating, and wall push-offs to prepare for independent swimming.</p>
//                 </div>
//                 <div className="program-card">
//                     <h4>Beginner Swim</h4>
//                     <p>For kids aged 3 to 5 years, teaching balance, kicking, and basic swimming skills through engaging games, songs, and stories.</p>
//                 </div>
//                 <div className="program-card">
//                     <h4>Advanced Swim</h4>
//                     <p>For children aged 6 and up, with two levels: Bold Blue and Big Blue. This program focuses on stroke development, water safety, and building swimming proficiency.</p>
//                 </div>
//             </div>
//             <a href="/contact" className="contact-button">Contact Us</a>
//         </div>
//     );
// }




// import React from 'react';
// import "../pages-styles/home-sections.css/programs.css";

// export default function Programs() {
//     return (
//         <div className="programs">
//             <h2>Our Programs</h2>
//             <p>Explore our wide range of swimming programs for children of all ages.</p>
//             <div className="card-container">
//                 <div className="program-card">
//                     <h4>Water Safety</h4>
//                     <p>Learn essential water safety skills and techniques.</p>
//                 </div>
//                 <div className="program-card">
//                     <h4>Beginner Swim</h4>
//                     <p>Build confidence and basic swimming skills.</p>
//                 </div>
//                 <div className="program-card">
//                     <h4>Advanced Swim</h4>
//                     <p>Develop advanced swimming techniques and stamina.</p>
//                 </div>
//             </div>
//             <a href="/contact" className="contact-button">Contact Us</a>
//         </div>
//     );
// }


                // The baby swim school caters to children between the ages of six months
                // and three years. It focuses on skills such as breath
                // control, back floating and learning to push off the wall,
                // readying each child for parentless participation.
                // In the swim school for toddlers, kids between the ages of
                // three and five learn balance, kicking and more, all through
                // fun games, songs and stories that make them excited to
                // come to class. For kids six and up, we have two programs,
                // Bold Blue and Big Blue, catering to different skill levels.
                // Swimmers will progress from learning how to be safe in
                // the water to learning different strokes and building their skills to become
                // proficient, strong swimmers.