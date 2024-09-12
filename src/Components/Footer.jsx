import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import './component-styles.css/footer.css';
import ContactButton from './ContactButton';

import { Typography } from '@mui/material';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-label">
                    <Typography
                        variant="h4"
                        component="h2"
                        sx={{
                            fontWeight: 'bold',
                            color: '#4F75FF',
                            textTransform: 'uppercase',
                            marginBottom: '20px'
                        }}
                    >
                        Splash-Zone
                        <br />
                        <span>Aquatics</span>
                    </Typography>
                    <ContactButton />
                </div>

                <div className="footer-social">
                    <div className="socials">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <Facebook fontSize="large" />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <Twitter fontSize="large" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <Instagram fontSize="large" />
                        </a>
                    </div>
                    <Typography variant="subtitle1" component="h4" sx={{ marginTop: '10px', color: '#4F75FF' }}>
                        Follow Us on Social Media
                    </Typography>
                </div>
            </div>

            <Typography variant="body2" sx={{ color: '#FFF', textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)" }}>
                © {currentYear} Splash Zone Aquatics. All rights reserved.
            </Typography>
        </div>
    );
}




// import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
// import './component-styles.css/footer.css';
// import ContactButton from './ContactButton';

// export default function Footer() {
//     const currentYear = new Date().getFullYear();
//     return (
//         <div className="footer">

//             <div className="footer-content">
//                 <div className="footer-label">
//                     <h2>Splash-Zone Aquatics</h2>
//                     <ContactButton />
//                 </div>

//                 <div className="footer-social">
//                     <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
//                         <Facebook fontSize="large" />
//                     </a>
//                     <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
//                         <Twitter fontSize="large" />
//                     </a>
//                     <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
//                         <Instagram fontSize="large" />
//                     </a>
//                     <h4>Follow Us on Social Media</h4>
//                 </div>
//             </div>

//             <p>© {currentYear} Splash Zone Aquatics. All rights reserved.</p>

//         </div>
//     );
// }
