import { Facebook, Twitter, Instagram, LinkedIn } from '@mui/icons-material';
import './component-styles.css/footer.css';
import ContactButton from './ContactButton';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div className="footer">

            <div className="footer-content">
                <div className="footer-label">
                    <h2>Splash-Zone Aquatics</h2>
                    <ContactButton />
                </div>

                <div className="footer-social">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <Facebook fontSize="large" />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <Twitter fontSize="large" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <Instagram fontSize="large" />
                    </a>
                    <h4>Follow Us on Social Media</h4>
                </div>
            </div>

            <p>© {currentYear} Splash Zone Aquatics. All rights reserved.</p>

        </div>
    );
}
