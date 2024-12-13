import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Alert } from '@mui/material';

function UnsubscribePage() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        setLoading(true);
        const unsubscribeData = { email };

        try {
            const response = await fetch('https://g4sphhpoma.execute-api.us-east-1.amazonaws.com/unsubscribe', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(unsubscribeData),
            });

            const result = await response.json();

            if (response.ok) {
                setMessage(result.message);
            } else {
                setMessage(result.message || 'Unsubscribe failed');
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('An error occurred while unsubscribing. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box sx={{ width: '100%', maxWidth: 600, margin: '0 auto', padding: 4 }}>
            <Typography variant="h4" gutterBottom>
                Unsubscribe from Our Newsletter
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
                To stop receiving newsletters from us, please enter your email below:
            </Typography>

            <TextField
                fullWidth
                label="Enter your email"
                variant="outlined"
                sx={{ mb: 3 }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleSubmit}
                disabled={loading || !email}
            >
                {loading ? 'Unsubscribing...' : 'Unsubscribe'}
            </Button>

            {message && (
                <Box sx={{ mt: 3 }}>
                    <Alert severity={message === 'Successfully unsubscribed!' ? 'success' : 'error'}>
                        {message}
                    </Alert>
                </Box>
            )}
        </Box>
    );
}

export default UnsubscribePage;

