import { Box, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';

const SocialMediaLinks = () => {
    const socialMedia = [
        { icon: <Facebook />, url: "https://www.facebook.com" },
        { icon: <Instagram />, url: "https://www.instagram.com" },
        { icon: <Twitter />, url: "https://www.twitter.com" },
        { icon: <LinkedIn />, url: "https://www.linkedin.com" },
    ];

    return (
        <Box display="flex" justifyContent="center" mt={2}>
            {socialMedia.map((media, index) => (
                <IconButton
                    key={index}
                    component="a"
                    href={media.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: 'white', margin: '0 10px' }}
                >
                    {media.icon}
                </IconButton>
            ))}
        </Box>
    );
};

export default SocialMediaLinks;
