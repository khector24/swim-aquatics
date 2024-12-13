import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { TextField, Button, Box, Typography } from "@mui/material";

const UnsubscribePage = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const prefilledEmail = queryParams.get("email") || "";

    const [email, setEmail] = useState(prefilledEmail);
    const [message, setMessage] = useState("");

    const handleUnsubscribe = async () => {
        try {
            const response = await fetch("https://g4sphhpoma.execute-api.us-east-1.amazonaws.com/unsubscribe", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });

            const result = await response.json();
            setMessage(result.message);
        } catch (error) {
            console.error("Error:", error);
            setMessage("An error occurred. Please try again later.");
        }
    };

    return (
        <Box sx={{ maxWidth: 500, margin: "0 auto", padding: 4 }}>
            <Typography variant="h4" gutterBottom>
                Unsubscribe from Newsletter
            </Typography>
            <Typography variant="body1" gutterBottom>
                Enter your email to unsubscribe from our newsletter.
            </Typography>
            <TextField
                fullWidth
                label="Email Address"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ my: 2 }}
            />
            <Button variant="contained" color="primary" fullWidth onClick={handleUnsubscribe}>
                Unsubscribe
            </Button>
            {message && (
                <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
                    {message}
                </Typography>
            )}
        </Box>
    );
};

export default UnsubscribePage;
