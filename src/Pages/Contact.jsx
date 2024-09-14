import { Box, Typography, Stack } from '@mui/material';
import ContactInfoCard from '../Components/ContactCardInfo';
import SocialMediaLinks from '../components/SocialMediaLinks';
import CustomButton from "../components/CustomButton";
import "../Pages/pages-styles/contact.css";

export default function Contact() {
    const email = "goya69@gmail.com";

    const contactDetails = [
        { label: 'Phone', value: '(845) 825-7038' },
        { label: 'Email', value: email },
    ];

    return (
        <section className="contact">
            <Box className="contact-container">
                <Typography variant="h3" component="h2" align="center" gutterBottom>
                    Contact Us
                </Typography>
                <Typography component="p" align="center" gutterBottom>
                    We would love to hear from you! Whether you have questions, inquiries, suggestions, or just want to connect, feel free to reach out.
                </Typography>

                {/* Business Hours and Location Section */}
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" mt={4} className="time-place">
                    <ContactInfoCard
                        title="Business Hours"
                        contactDetails={[
                            { label: 'Monday - Friday', value: '9:00 AM - 5:00 PM' },
                            { label: 'Saturday - Sunday', value: 'Closed' },
                        ]}
                    />
                    <ContactInfoCard
                        title="Location"
                        contactDetails={[
                            { label: 'Area', value: 'We are based in New York City and provide services throughout the metro area.' },
                        ]}
                    />
                </Stack>

                {/* Contact Info Section */}
                <Box mt={4}>
                    <ContactInfoCard
                        title="Our Contact Information"
                        contactDetails={contactDetails}
                        email={email}
                    />
                </Box>

                {/* Social Media Section */}
                <Box mt={4} textAlign="center">
                    <Typography variant="h5" component="h3" gutterBottom>
                        Connect with Us on Social Media
                    </Typography>
                    <SocialMediaLinks />
                </Box>

                {/* FAQ and Testimonials Section */}
                <Box mt={6}>
                    <div className="FAQ-Snippet">
                        <Typography variant="h4" component="h2" gutterBottom>
                            Got More Questions?
                        </Typography>
                        <Typography variant="body1" component="p" gutterBottom>
                            We've answered some of our most frequently asked questions on the FAQ page, but if you still have inquiries, we’re happy to help!
                        </Typography>
                        <CustomButton to={"/faq"} label={"Visit FAQ Page"} />
                    </div>

                    <div className="Testimonials-Snippet">
                        <Typography variant="h4" component="h2" gutterBottom sx={{ color: "#4F75FF" }}>
                            Hear from Our Happy Parents!
                        </Typography>
                        <Typography variant="body1" component="p" gutterBottom>
                            Don’t just take our word for it—see what other parents are saying about their experience with Splash Zone Aquatics. Our dedicated instructor Ethan is praised for his friendly and expert approach!
                        </Typography>
                        <CustomButton to={"/testimonials"} label={"Read Reviews"} />
                    </div>
                </Box>
            </Box>
        </section>
    );
}




// import { Box, Typography, Card, CardContent, Stack } from '@mui/material';
// import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';
// import CustomButton from "../components/CustomButton";
// import "../Pages/pages-styles/contact.css";

// export default function Contact() {
//     const email = "goya69@gmail.com";

//     return (
//         <section className="contact">
//             <Box className="contact-container">
//                 <Typography variant="h3" component="h2" align="center" gutterBottom>
//                     Contact Us
//                 </Typography>
//                 <Typography component="p" align="center" gutterBottom>
//                     We would love to hear from you! Whether you have questions, inquiries, suggestions, or just want to connect, feel free to reach out.
//                 </Typography>

//                 {/* Business Hours and Location Section */}
//                 <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" mt={4} className="time-place">
//                     <Card className="card">
//                         <CardContent>
//                             <Typography variant="h5" component="h3" gutterBottom>
//                                 Business Hours
//                             </Typography>
//                             <Typography variant="body1" gutterBottom>
//                                 <strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM
//                             </Typography>
//                             <Typography variant="body1" gutterBottom>
//                                 <strong>Saturday - Sunday:</strong> Closed
//                             </Typography>
//                         </CardContent>
//                     </Card>

//                     <Card className="card" style={{ backgroundColor: "#F0F8FF" }}>
//                         <CardContent>
//                             <Typography variant="h5" component="h3" gutterBottom>
//                                 Location
//                             </Typography>
//                             <Typography style={{ color: "#4F75FF" }} variant="h6">
//                                 We are based in New York City and provide services throughout the metro area.
//                             </Typography>
//                         </CardContent>
//                     </Card>
//                 </Stack>

//                 {/* Contact Info Section */}
//                 <Box className="contact-info" mt={4}>
//                     <Typography variant="h5" component="h3" gutterBottom>
//                         Our Contact Information
//                     </Typography>
//                     <Typography variant="body1" gutterBottom>
//                         <strong>Phone:</strong> (845) 825-7038
//                     </Typography>
//                     <Typography variant="body1" gutterBottom>
//                         <strong>Email:</strong> {email}
//                     </Typography>
//                     <CustomButton to={`mailto:${email}`} label="Email Us" className="email-button" />
//                 </Box>

//                 {/* Social Media Section */}
//                 <Box className="social-media" mt={4} textAlign="center">
//                     <Typography variant="h5" component="h3" gutterBottom>
//                         Connect with Us on Social Media
//                     </Typography>
//                     <Box className="social-icons" display="flex" justifyContent="center">
//                         <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//                             <Facebook fontSize="large" className="social-icon" />
//                         </a>
//                         <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
//                             <Instagram fontSize="large" className="social-icon" />
//                         </a>
//                         <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
//                             <Twitter fontSize="large" className="social-icon" />
//                         </a>
//                         <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
//                             <LinkedIn fontSize="large" className="social-icon" />
//                         </a>
//                     </Box>
//                 </Box>

//                 {/* FAQ and Testimonials Section */}
//                 <Box mt={6}>
//                     <div className="FAQ-Snippet">
//                         <Typography variant="h4" component="h2" gutterBottom>
//                             Got More Questions?
//                         </Typography>
//                         <Typography variant="body1" component="p" gutterBottom>
//                             We've answered some of our most frequently asked questions on the FAQ page, but if you still have inquiries, we’re happy to help!
//                         </Typography>
//                         <CustomButton to={"/faq"} label={"Visit FAQ Page"} />
//                     </div>

//                     <div className="Testimonials-Snippet">
//                         <Typography variant="h4" component="h2" gutterBottom sx={{ color: "#4F75FF" }}>
//                             Hear from Our Happy Parents!
//                         </Typography>
//                         <Typography variant="body1" component="p" gutterBottom>
//                             Don’t just take our word for it—see what other parents are saying about their experience with Splash Zone Aquatics. Our dedicated instructor Ethan is praised for his friendly and expert approach!
//                         </Typography>
//                         <CustomButton to={"/testimonials"} label={"Read Reviews"} />
//                     </div>
//                 </Box>
//             </Box>
//         </section>
//     );
// }




// import { Box, Typography, TextField, Grid, Stack, Card, CardContent } from '@mui/material';
// import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';
// import CustomButton from "../components/CustomButton";
// import "../Pages/pages-styles/contact.css";

// export default function Contact() {
//     const email = "goya69@gmail.com";

//     return (
//         <section className="contact">
//             <Box className="contact-container">
//                 <Typography variant="h3" component="h2" align="center" gutterBottom>
//                     Contact Us
//                 </Typography>
//                 <Typography component="h2" align="center" gutterBottom>
//                     We would love to hear from you! Whether you have questions, inquiries, suggestions, or just want to connect, feel free to reach out.
//                 </Typography>

//                 <section className="time-place">
//                     {/* Business Hours Section */}
//                     <Box className="business-hours" mt={4}>
//                         <Card className="card">
//                             <Typography variant="h5" component="h3" gutterBottom>
//                                 Business Hours
//                             </Typography>
//                             <Typography variant="body1" gutterBottom>
//                                 <strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM
//                             </Typography>
//                             <Typography variant="body1" gutterBottom>
//                                 <strong>Saturday - Sunday:</strong> Closed
//                             </Typography>
//                         </Card>
//                     </Box>

//                     {/* Location Section */}
//                     <Box>
//                         <Card className="card" style={{ backgroundColor: "#F0F8FF" }}>
//                             <CardContent>
//                                 <Typography variant="h5" component="h3" gutterBottom>
//                                     Location
//                                 </Typography>
//                                 <Typography style={{ color: "#4F75FF" }} variant="h6">
//                                     We are based in New York City and provide services throughout the metro area.
//                                 </Typography>
//                             </CardContent>
//                         </Card>
//                     </Box>
//                 </section>


//                 {/* Contact Info Section */}
//                 <Box className="contact-info" mt={4}>
//                     <Typography variant="h5" component="h3" gutterBottom>
//                         Our Contact Information
//                     </Typography>
//                     <Typography variant="body1" gutterBottom>
//                         <strong>Phone:</strong> (845) 825-7038
//                     </Typography>
//                     <Typography variant="body1" gutterBottom>
//                         <strong>Email:</strong> {email}
//                     </Typography>
//                     <CustomButton to={`mailto:${email}`} label="Email Us" className="email-button" />
//                 </Box>

//                 {/* Social Media Section */}
//                 <Box className="social-media" mt={4} textAlign="center">
//                     <Typography variant="h5" component="h3" gutterBottom>
//                         Connect with Us on Social Media
//                     </Typography>
//                     <Box className="social-icons" display="flex" justifyContent="center">
//                         <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//                             <Facebook fontSize="large" className="social-icon" />
//                         </a>
//                         <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
//                             <Instagram fontSize="large" className="social-icon" />
//                         </a>
//                         <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
//                             <Twitter fontSize="large" className="social-icon" />
//                         </a>
//                         <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
//                             <LinkedIn fontSize="large" className="social-icon" />
//                         </a>
//                     </Box>
//                 </Box>

//                 {/* Preview FAQ */}
//                 <div className="FAQ-Snippet">
//                     <Typography variant="h4" component="h2" gutterBottom>
//                         Got More Questions?
//                     </Typography>
//                     <Typography variant="body1" component="p" gutterBottom>
//                         We've answered some of our most frequently asked questions on the FAQ page, but if you still have inquiries, we’re happy to help!
//                     </Typography>
//                     <CustomButton to={"/faq"} label={"Visit FAQ Page"} />

//                 </div>


//                 {/* Preview Testimonial */}
//                 <div className="Testimonials-Snippet">
//                     <Typography variant="h4" component="h2" gutterBottom sx={{ color: "#4F75FF" }}>
//                         Hear from Our Happy Parents!
//                     </Typography>
//                     <Typography variant="body1" component="p" gutterBottom>
//                         Don’t just take our word for it—see what other parents are saying about their experience with Splash Zone Aquatics. Our dedicated instructor Ethan is praised for his friendly and expert approach!
//                     </Typography>
//                     <CustomButton to={"/testimonials"} label={"Read Reviews"} />
//                 </div>
//             </Box>
//         </section>
//     );
// }



// import { Box, Typography } from '@mui/material';
// import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';
// import CustomButton from "../components/CustomButton";  // Import your CustomButton
// import "../Pages/pages-styles/contact.css";

// export default function Contact() {
//     const email = "goya69@gmail.com";

//     return (
//         <section className="contact">
//             <Box className="contact-container">
//                 <Typography variant="h3" component="h2" align="center" gutterBottom>
//                     Contact Us
//                 </Typography>
//                 <Typography component="h2" align="center">
//                     We would love to hear from you! Whether you have questions, inquiries, suggestions, or just want to connect, feel free to reach out.
//                 </Typography>

//                 {/* Contact Info Section */}
//                 <Box className="contact-info">
//                     <Typography variant="h5" component="h3" gutterBottom>
//                         Our Contact Information
//                     </Typography>
//                     <Typography variant="body1" gutterBottom>
//                         <strong>Phone:</strong> (845) 825-7038
//                     </Typography>
//                     <Typography variant="body1" gutterBottom>
//                         <strong>Email:</strong> {email}
//                     </Typography>

//                     {/* Email Button */}
//                     <CustomButton
//                         to={`mailto:${email}`}
//                         label="Email Us"
//                         className="email-button"
//                     />
//                 </Box>

//                 {/* Links to FAQ and Testimonials */}
//                 <Box className="additional-info" mt={4} textAlign="center">
//                     <Typography variant="h5" component="h3" gutterBottom>
//                         Need More Information?
//                     </Typography>
//                     <Box>
//                         <CustomButton
//                             to="/FAQ"
//                             label="View FAQs"
//                             className="info-button"
//                         />
//                         <CustomButton
//                             to="/Testimonials"
//                             label="Read Testimonials"
//                             className="info-button"
//                         />
//                     </Box>
//                 </Box>

//                 {/* Social Media Section */}
//                 <Box className="social-media" mt={4} textAlign="center">
//                     <Typography variant="h5" component="h3" gutterBottom>
//                         Connect with Us on Social Media
//                     </Typography>
//                     <Box className="social-icons" display="flex" justifyContent="center">
//                         <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//                             <Facebook fontSize="large" className="social-icon" />
//                         </a>
//                         <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
//                             <Instagram fontSize="large" className="social-icon" />
//                         </a>
//                         <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
//                             <Twitter fontSize="large" className="social-icon" />
//                         </a>
//                         <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
//                             <LinkedIn fontSize="large" className="social-icon" />
//                         </a>
//                     </Box>
//                 </Box>
//             </Box>
//         </section>
//     );
// }


// import { Box, Typography, Button } from '@mui/material';
// import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';
// import "../Pages/pages-styles/contact.css";

// export default function Contact() {
//     const email = "info@example.com";

//     return (
//         <Box className="contact-container">
//             <Typography variant="h3" component="h2" align="center" gutterBottom>
//                 Contact Us
//             </Typography>
//             <Typography component="h2" align="center">
//                 Please do not hesitate to contact us!
//                 We would love to hear from you with any questions, inquiries, sugestions and anything else.
//             </Typography>

//             {/* Contact Info Section */}
//             <Box className="contact-info">
//                 <Typography variant="h5" component="h3" gutterBottom>
//                     Our Contact Information
//                 </Typography>
//                 <Typography variant="body1" gutterBottom>
//                     <strong>Phone:</strong> (845) 825-7038
//                 </Typography>
//                 <Typography variant="body1" gutterBottom>
//                     <strong>Email:</strong> {email}
//                 </Typography>

//                 {/* Email Button */}
//                 <Button
//                     variant="contained"
//                     color="primary"
//                     className="email-button"
//                     href={`mailto:${email}`}
//                 >
//                     Email Us
//                 </Button>
//             </Box>

//             {/* Social Media Section */}
//             <Box className="social-media">
//                 <Typography variant="h5" component="h3" gutterBottom>
//                     Connect with Us on Social Media
//                 </Typography>
//                 <Box className="social-icons">
//                     <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//                         <Facebook fontSize="large" className="social-icon" />
//                     </a>
//                     <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
//                         <Instagram fontSize="large" className="social-icon" />
//                     </a>
//                     <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
//                         <Twitter fontSize="large" className="social-icon" />
//                     </a>
//                     <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
//                         <LinkedIn fontSize="large" className="social-icon" />
//                     </a>
//                 </Box>
//             </Box>
//         </Box>
//     );
// }





// import { Box, Typography, TextField, Button, Paper } from '@mui/material';
// import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';
// import "../Pages/pages-styles/contact.css";

// export default function Contact() {
//     return (
//         <Box className="contact-container">
//             <Typography variant="h3" component="h2" align="center" gutterBottom>
//                 Contact Us
//             </Typography>
//             <Typography variant="body1" align="center" gutterBottom>
//                 Get in touch with us for any inquiries or questions. We are happy to assist you!
//             </Typography>

//             {/* Contact Form Section */}
//             <Paper elevation={3} className="contact-form">
//                 <Typography variant="h5" component="h3" gutterBottom>
//                     Send Us a Message
//                 </Typography>
//                 <form className="form">
//                     <TextField
//                         className="form-input"
//                         label="First Name"
//                         variant="outlined"
//                         required
//                     />
//                     <TextField
//                         className="form-input"
//                         label="Last Name"
//                         variant="outlined"
//                         required
//                     />
//                     <TextField
//                         className="form-input"
//                         label="Email Address"
//                         variant="outlined"
//                         required
//                     />
//                     <TextField
//                         className="form-input"
//                         label="Message"
//                         variant="outlined"
//                         multiline
//                         rows={4}
//                         required
//                     />
//                     <Button
//                         variant="contained"
//                         color="primary"
//                         size="large"
//                         className="form-submit-button"
//                     >
//                         Submit
//                     </Button>
//                 </form>
//             </Paper>

//             {/* Contact Info Section */}
//             <Box className="contact-info">
//                 <Typography variant="h5" component="h3" gutterBottom>
//                     Our Contact Information
//                 </Typography>
//                 <Typography variant="body1" gutterBottom>
//                     <strong>Phone:</strong> (123) 659-9034
//                 </Typography>
//                 <Typography variant="body1" gutterBottom>
//                     <strong>Email:</strong> info@example.com
//                 </Typography>
//             </Box>

//             {/* Social Media Section */}
//             <Box className="social-media">
//                 <Typography variant="h5" component="h3" gutterBottom>
//                     Connect with Us on Social Media
//                 </Typography>
//                 <Box className="social-icons">
//                     <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//                         <Facebook fontSize="large" className="social-icon" style={{ color: '#4267B2' }} />
//                     </a>
//                     <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
//                         <Instagram fontSize="large" className="social-icon" style={{ color: '#C13584' }} />
//                     </a>
//                     <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
//                         <Twitter fontSize="large" className="social-icon" style={{ color: '#1DA1F2' }} />
//                     </a>
//                     <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
//                         <LinkedIn fontSize="large" className="social-icon" style={{ color: '#0A66C2' }} />
//                     </a>
//                 </Box>
//             </Box>
//         </Box>
//     );
// }


// import { Box, Typography, TextField, Button, Grid, Paper } from '@mui/material';
// import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';
// import "../Pages/pages-styles/contact.css"

// export default function Contact() {
//     return (
//         <Box sx={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
//             <Typography variant="h3" component="h2" align="center" gutterBottom>
//                 Contact Us
//             </Typography>
//             <Typography variant="body1" align="center" gutterBottom>
//                 Get in touch with us for any inquiries or questions. We are happy to assist you!
//             </Typography>

//             {/* Contact Form Section */}
//             <Paper elevation={3} sx={{ padding: '20px', marginTop: '20px' }}>
//                 <Typography variant="h5" component="h3" gutterBottom>
//                     Send Us a Message
//                 </Typography>
//                 <form>
//                     <Grid container spacing={2}>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 fullWidth
//                                 label="First Name"
//                                 variant="outlined"
//                                 required
//                             />
//                         </Grid>
//                         <Grid item xs={12} sm={6}>
//                             <TextField
//                                 fullWidth
//                                 label="Last Name"
//                                 variant="outlined"
//                                 required
//                             />
//                         </Grid>
//                         <Grid item xs={12}>
//                             <TextField
//                                 fullWidth
//                                 label="Email Address"
//                                 variant="outlined"
//                                 required
//                             />
//                         </Grid>
//                         <Grid item xs={12}>
//                             <TextField
//                                 fullWidth
//                                 label="Message"
//                                 variant="outlined"
//                                 multiline
//                                 rows={4}
//                                 required
//                             />
//                         </Grid>
//                         <Grid item xs={12}>
//                             <Button
//                                 variant="contained"
//                                 color="primary"
//                                 size="large"
//                                 fullWidth
//                             >
//                                 Submit
//                             </Button>
//                         </Grid>
//                     </Grid>
//                 </form>
//             </Paper>

//             {/* Contact Info Section */}
//             <Box sx={{ marginTop: '40px' }}>
//                 <Typography variant="h5" component="h3" gutterBottom>
//                     Our Contact Information
//                 </Typography>
//                 <Typography variant="body1" gutterBottom>
//                     <strong>Phone:</strong> (123) 659-9034
//                 </Typography>
//                 <Typography variant="body1" gutterBottom>
//                     <strong>Email:</strong> info@example.com
//                 </Typography>
//             </Box>

//             {/* Social Media Section */}
//             <Box sx={{ marginTop: '20px' }}>
//                 <Typography variant="h5" component="h3" gutterBottom>
//                     Connect with Us on Social Media
//                 </Typography>
//                 <Box sx={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px' }}>
//                     <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//                         <Facebook fontSize="large" sx={{ color: '#4267B2' }} />
//                     </a>
//                     <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
//                         <Instagram fontSize="large" sx={{ color: '#C13584' }} />
//                     </a>
//                     <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
//                         <Twitter fontSize="large" sx={{ color: '#1DA1F2' }} />
//                     </a>
//                     <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
//                         <LinkedIn fontSize="large" sx={{ color: '#0A66C2' }} />
//                     </a>
//                 </Box>
//             </Box>
//         </Box>
//     );
// }




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
