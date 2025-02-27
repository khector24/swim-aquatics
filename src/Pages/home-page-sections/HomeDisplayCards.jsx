import "../pages-styles/home-sections.css/home-display-cards.css"
import { Box, Typography, Card, CardActionArea, CardMedia } from '@mui/material';

const images = [
    {
        label: 'Have Fun and Play',
        image: 'https://s3.us-east-1.amazonaws.com/splashzoneaquatics.com/assets/quote-images/girl.jpg',
        alt: 'Kids playing and having fun',
    },
    {
        label: 'Stay Fit',
        image: 'https://s3.us-east-1.amazonaws.com/splashzoneaquatics.com/assets/images/kid-exercising.avif',
        alt: 'Kid exercising and staying fit',
    },
    {
        label: 'Learn Water Safety',
        image: 'https://s3.us-east-1.amazonaws.com/splashzoneaquatics.com/assets/images/teach-swimming.jpg',
        alt: 'Child learning water safety',
    }
];

export default function HomeDisplayCards() {
    return (
        <div className="section-container">
            {images.map((item, index) => (
                <Box
                    key={index}
                    className="home-card"
                    sx={{
                        position: 'relative',
                        width: '30%',
                        overflow: 'hidden',
                    }}
                >
                    <Card sx={{ height: '100%', backgroundColor: 'transparent' }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="300"
                                image={item.image}
                                alt={item.alt}
                                sx={{ objectFit: 'cover', height: '100%' }}
                            />
                        </CardActionArea>
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: 10,
                                left: 15,
                            }}
                        >
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{
                                    color: '#FFF',
                                    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
                                    textDecoration: 'underline',
                                    textUnderlineOffset: '4px',
                                }}
                            >
                                {item.label}
                            </Typography>
                        </Box>
                    </Card>
                </Box>
            ))}
        </div>
    );
}
