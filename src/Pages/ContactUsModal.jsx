import React, { useState } from 'react';
import { Box, Typography, Modal, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';
import CustomButton from "../components/CustomButton";
import CloseIcon from '@mui/icons-material/Close';
import './pages-styles/contact-us-modal.css'

function ContactUsModal({ open, handleClose }) {
    const email = "splashzoneaquatics@gmail.com";

    return (
        <Modal
            className='container-modal'
            open={open} onClose={handleClose}>
            <Box
                className="container"
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                }}>
                <IconButton
                    sx={{ position: 'absolute', top: 8, right: 8 }}
                    onClick={handleClose}
                >
                    <CloseIcon />
                </IconButton>
                <Typography variant="h6" component="h1" sx={{ pb: 1.5 }}>Contact Us</Typography>
                <Typography variant="body1" sx={{ pb: 1.5 }}>
                    We would love to hear from you! Whether you have questions, inquiries, suggestions, or just want to connect, feel free to reach out.
                </Typography>
                <Typography variant="h6" component="h4" sx={{ pb: 0 }}>Business Hours</Typography>
                <Typography variant="body1" sx={{ pb: 1.5 }}>
                    Monday - Friday: 9:00 AM - 5:00 PM<br />
                    Saturday - Sunday: Closed
                </Typography>
                <Box sx={{ pb: 1 }}>
                    <Typography variant="h5" component="h4" gutterBottom sx={{ mt: 0, pb: 0 }}>Our Contact Information</Typography>
                    <Typography variant="body1" gutterBottom><strong>Phone:</strong> (845) 825-7038</Typography>
                    <Typography variant="body1" gutterBottom><strong>Email:</strong> {email}</Typography>
                    <CustomButton to={`mailto:${email}`} className="email-button" label="Email Us" />
                </Box>
                <Box className="social-container" sx={{ mt: 0 }}>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <Facebook fontSize="large" className="social-icon" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <Instagram fontSize="large" className="social-icon" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <Twitter fontSize="large" className="social-icon" />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <LinkedIn fontSize="large" className="social-icon" />
                    </a>
                </Box>
            </Box>
        </Modal>
    );
}

export default ContactUsModal;

