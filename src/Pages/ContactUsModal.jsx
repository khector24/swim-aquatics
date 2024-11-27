import React, { useState } from 'react';
import { Box, Typography, Modal, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';
import CustomButton from "../components/CustomButton";
import CloseIcon from '@mui/icons-material/Close';

function ContactUsModal({ open, handleClose }) {
    const email = "splashzoneaquatics@gmail.com";

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={{
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
                <Typography variant="h6" component="h1">Contact Us</Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                    We would love to hear from you! Whether you have questions, inquiries, suggestions, or just want to connect, feel free to reach out.
                </Typography>
                <Typography variant="h6" component="h4" sx={{ mt: 2 }}>Business Hours</Typography>
                <Typography variant="body1">
                    Monday - Friday: 9:00 AM - 5:00 PM<br />
                    Saturday - Sunday: Closed
                </Typography>
                <Box mt={4}>
                    <Typography variant="h5" component="h3" gutterBottom>Our Contact Information</Typography>
                    <Typography variant="body1" gutterBottom><strong>Phone:</strong> (845) 825-7038</Typography>
                    <Typography variant="body1" gutterBottom><strong>Email:</strong> {email}</Typography>
                    <CustomButton to={`mailto:${email}`} label="Email Us" className="email-button" />
                </Box>
                <Box mt={2}>
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

