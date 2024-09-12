import { Box, Typography, TextField, Button, Grid, Paper } from '@mui/material';
import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';

export default function Contact() {
    return (
        <Box sx={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
            <Typography variant="h3" component="h2" align="center" gutterBottom>
                Contact Us
            </Typography>
            <Typography variant="body1" align="center" gutterBottom>
                Get in touch with us for any inquiries or questions. We are happy to assist you!
            </Typography>

            {/* Contact Form Section */}
            <Paper elevation={3} sx={{ padding: '20px', marginTop: '20px' }}>
                <Typography variant="h5" component="h3" gutterBottom>
                    Send Us a Message
                </Typography>
                <form>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="First Name"
                                variant="outlined"
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Last Name"
                                variant="outlined"
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Email Address"
                                variant="outlined"
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Message"
                                variant="outlined"
                                multiline
                                rows={4}
                                required
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                fullWidth
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>

            {/* Contact Info Section */}
            <Box sx={{ marginTop: '40px' }}>
                <Typography variant="h5" component="h3" gutterBottom>
                    Our Contact Information
                </Typography>
                <Typography variant="body1" gutterBottom>
                    <strong>Phone:</strong> (123) 659-9034
                </Typography>
                <Typography variant="body1" gutterBottom>
                    <strong>Email:</strong> info@example.com
                </Typography>
            </Box>

            {/* Social Media Section */}
            <Box sx={{ marginTop: '20px' }}>
                <Typography variant="h5" component="h3" gutterBottom>
                    Connect with Us on Social Media
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px' }}>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <Facebook fontSize="large" sx={{ color: '#4267B2' }} />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <Instagram fontSize="large" sx={{ color: '#C13584' }} />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <Twitter fontSize="large" sx={{ color: '#1DA1F2' }} />
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <LinkedIn fontSize="large" sx={{ color: '#0A66C2' }} />
                    </a>
                </Box>
            </Box>
        </Box>
    );
}




// export default function Contact() {
//     return (
//         <>
//             <h2>Contact Us</h2>
//             <p>Get in touch with us for any inquiries or questions.</p>
//             <h4>Phone</h4>
//             <p>(123) 659-9034</p>
//             <h4>Email</h4>
//             <p>info@example.com</p>

//             <h2>Connect On Social Media</h2>
//             <p>Get in touch with us for any inquiries or questions.</p>
//             <h6>Facebook</h6>
//             <h6>Instagram</h6>
//         </>
//     );
// }
