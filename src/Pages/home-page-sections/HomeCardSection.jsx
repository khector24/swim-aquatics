import { Box, Typography, Card, CardActionArea, CardMedia } from '@mui/material';
import "../pages-styles/home-sections.css/home-card-section.css"

const images = [
    {
        label: 'Have Fun and Play',
        image: '/src/assets/images/quote-images/girl.jpg',
        alt: 'Kids playing and having fun',
    },
    {
        label: 'Stay Fit',
        image: '/src/assets/images/kid-exercising.avif',
        alt: 'Kid exercising and staying fit',
    },
    {
        label: 'Learn Water Safety',
        image: '/src/assets/images/teach-swimming.jpg',
        alt: 'Child learning water safety',
    }
];

export default function HomeCardSection() {
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
                        '&:hover': {
                            transform: 'translateY(-10px)',
                            transition: 'transform 0.3s ease',
                        },
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
                                    color: '#fff',
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



// import Card from '@mui/material/Card';
// import CardActionArea from '@mui/material/CardActionArea';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import "../pages-styles/home-sections.css/home-card-section.css"

// const images = [
//     {
//         label: 'Have Fun and Play',
//         image: '/src/assets/images/quote-images/girl.jpg',
//         alt: 'Kids playing and having fun',
//     },
//     {
//         label: 'Stay Fit',
//         image: '/src/assets/images/kid-exercising.avif',
//         alt: 'Kid exercising and staying fit',
//     },
//     {
//         label: 'Learn Water Safety',
//         image: '/src/assets/images/teach-swimming.jpg',
//         alt: 'Child learning water safety',
//     }
// ];

// export default function HomeCardSection() {
//     return (
//         <div className="section-container">
//             {images.map((item, index) => (
//                 <Box
//                     key={index}
//                     className="home-card"
//                     sx={{
//                         position: 'relative',
//                         width: '30%',
//                         overflow: 'hidden',
//                         // marginBottom: '-20px', // Make the components leak a few pixels
//                         '&:hover': {
//                             transform: 'translateY(-10px)',
//                             transition: 'transform 0.3s ease',
//                         },
//                     }}
//                 >
//                     <Card sx={{ height: '100%', backgroundColor: 'transparent' }}>
//                         <CardActionArea>
//                             <CardMedia
//                                 component="img"
//                                 height="300"
//                                 image={item.image}
//                                 alt={item.alt}
//                                 sx={{ objectFit: 'cover', height: '100%' }}
//                             />
//                         </CardActionArea>
//                         <Box
//                             sx={{
//                                 position: 'absolute',
//                                 bottom: 10,
//                                 left: 15,
//                             }}
//                         >
//                             <Typography
//                                 variant="h6"
//                                 component="div"
//                                 sx={{
//                                     color: '#fff',
//                                     textDecoration: 'underline',
//                                     textUnderlineOffset: '4px',
//                                 }}
//                             >
//                                 {item.label}
//                             </Typography>
//                         </Box>
//                     </Card>
//                 </Box>
//             ))}
//         </div>
//     );
// }
