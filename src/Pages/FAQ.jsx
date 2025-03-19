import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CustomButton from '../Components/CustomButton';
import "../Pages/pages-styles/faq.css";
import { useOutletContext } from 'react-router-dom';


// Import the JSON data
import faqData from '../assets/faqs.json';

export default function FAQ() {
    const { onContactClick } = useOutletContext();


    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        setFaqs(faqData);
    }, []);

    return (
        <div className="FAQ-Content">
            <div className="FAQ-Heading">
                <Typography variant="h3" component="h1" gutterBottom>
                    Frequently Asked Questions
                </Typography>
                <Typography variant="h6" component="h4" gutterBottom>
                    Reliable Answers to Our Most Popular Questions
                </Typography>
                <div className="heading-description">
                    <Typography variant="body1" component="p" gutterBottom>
                        Here at Splash-Zone, we understand that you may have a lot of questions and we're here to answer all of them.
                        We want you to trust us to take amazing care of your child and help them grow socially, emotionally,
                        and intellectually while having a whole lot of fun.
                    </Typography>
                    <br />
                    <Typography variant="body1" component="p" gutterBottom>
                        We hope that the answers we provide to the following FAQs offer all of the information you need.
                    </Typography>
                    <hr />
                    <Typography className="question" variant="body1" component="p" gutterBottom>
                        Have a more specific question?
                    </Typography>
                    <CustomButton onClick={onContactClick} label={"Contact Us!"} />
                </div>

            </div>

            <hr />

            <div className="accordion">
                {faqs.map((faq, index) => (
                    <Accordion key={index} defaultExpanded={index === 0}>
                        <AccordionSummary
                            sx={{ backgroundColor: "#4F75FF" }}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${index}-content`}
                            id={`panel${index}-header`}
                        >
                            <Typography sx={{ color: 'white' }}>
                                Question {index + 1}: {faq.question}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {faq.answer}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        </div>
    );
}



// import React, { useEffect, useState } from 'react';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import "../Pages/pages-styles/faq.css"

// // Import the JSON data
// import faqData from '../assets/faqs.json';

// export default function FAQ() {
//     const [faqs, setFaqs] = useState([]);

//     useEffect(() => {
//         setFaqs(faqData);
//     }, []);

//     return (
//         <div className='FAQ-Content'>
//             <div className='FAQ-Heading'>
//                 <h1>Frequently Asked Questions</h1>
//                 <h4>Reliable Answers to Our Most Popular Questions</h4>
//                 <p>
//                     Here at Splash-Zone, we understand that you may have a lot
//                     of questions and we're here to answer all of them. We want
//                     you to trust us to take amazing care of your child and
//                     help them grow socially, emotionally and
//                     intellectually while having a whole lot of fun.
//                     <br />
//                     <br />
//                     We hope that the answers we provide to the following FAQs
//                     offer all of the information you need.
//                     <br />
//                     <br />
//                     <hr />
//                     Have a more specific question about our swim schools and services?
//                     <br />
//                     <br />
//                     Contact a location around your area to learn more about swim training and instruction in a fun and exciting environment. We look forward to seeing you in the pool!
//                 </p>
//             </div>
//             <hr />
//             <div className="accordion">
//                 {faqs.map((faq, index) => (
//                     <Accordion key={index} defaultExpanded={index === 0}>
//                         <AccordionSummary
//                             sx={{ backgroundColor: "#4F75FF" }}
//                             expandIcon={<ExpandMoreIcon />}
//                             aria-controls={`panel${index}-content`}
//                             id={`panel${index}-header`}
//                         >
//                             <Typography sx={{ color: 'white' }}>
//                                 Question {index + 1}: {faq.question}
//                             </Typography>
//                         </AccordionSummary>
//                         <AccordionDetails>
//                             <Typography>
//                                 {faq.answer}
//                             </Typography>
//                         </AccordionDetails>
//                     </Accordion>
//                 ))}
//             </div>
//         </div>
//     );
// }

