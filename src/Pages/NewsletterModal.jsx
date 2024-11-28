import { Box, Typography, Modal, IconButton, TextField, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

function NewsletterModal({ open, handleClose }) {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [subscribedAt, setSubscribedAt] = useState(new Date().toISOString());

    const handleSubmit = async () => {
        const subscriptionData = {
            email,
            firstName,
            lastName,
        };

        try {
            const response = await fetch('https://g4sphhpoma.execute-api.us-east-1.amazonaws.com/newsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(subscriptionData),
            });

            const result = await response.json();

            if (response.ok) {
                alert(result.message); // Successfully subscribed
                handleClose();
            } else {
                alert(result.message || 'Subscription failed');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while subscribing. Please try again.');
        }
    };


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
                <Typography variant="h6" component="h1">Subscribe to Our Newsletter</Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                    Stay updated with the latest news and offers from Splash Zone Aquatics.
                </Typography>
                <Box mt={4}>
                    <TextField
                        fullWidth
                        label="First Name"
                        variant="outlined"
                        sx={{ mb: 2 }}
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        label="Last Name"
                        variant="outlined"
                        sx={{ mb: 2 }}
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        label="Enter your email"
                        variant="outlined"
                        sx={{ mb: 2 }}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
                        Subscribe
                    </Button>
                </Box>
            </Box>
        </Modal>
    );
}

export default NewsletterModal;

