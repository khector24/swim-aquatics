import React, { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "../Pages/pages-styles/faq.css"

// Import the JSON data
import faqData from '../assets/faqs.json';

export default function FAQ() {
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        setFaqs(faqData);
    }, []);

    return (
        <div>
            <h1>Frequently Asked Questions</h1>
            <div className="accordion">
                {faqs.map((faq, index) => (
                    <Accordion key={index} defaultExpanded={index === 0}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${index}-content`}
                            id={`panel${index}-header`}
                        >
                            <Typography>
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

