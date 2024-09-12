import "../home-page-sections/svg.css";
import { Box, Typography, Card, CardActionArea, CardMedia } from '@mui/material';

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

export default function SVGExample() {
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
                        // '&:hover': {
                        //     transform: 'translateY(-10px)',
                        //     transition: 'transform 0.3s ease',
                        // },
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
                                    color: '#FFD94F',
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


// import "../home-page-sections/svg.css";
// import { Box, Typography, Card, CardActionArea, CardMedia } from '@mui/material';


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

// export default function SVGExample() {
//     return (
//         <div className="container">
//             {images.map((item, index) => (
//                 <Box
//                     key={index}
//                     className="home-card"
//                     sx={{
//                         position: "relative",
//                         width: "30%",
//                         overflow: "hidden",
//                         "&:hover": {
//                             transform: "translateY(-10px)",
//                             transition: "transform 0.3s ease",
//                         },
//                     }}
//                 >
//                     <Card sx={{ height: "100%", backgroundColor: "transparent" }}>
//                         <CardActionArea>
//                             <CardMedia
//                                 component="img"
//                                 height="300"
//                                 image={item.image}
//                                 alt={item.alt}
//                                 sx={{
//                                     objectFit: "cover",
//                                     height: "100%"
//                                 }}
//                             />
//                         </CardActionArea>
//                         <Box
//                             sx={{
//                                 position: "absolute",
//                                 bottom: 10,
//                                 left: 15,
//                             }}>
//                             <Typography
//                                 variant="h6"
//                                 component="div"
//                                 sx={{
//                                     color: "#FFD94F",
//                                     textDecoration: "underline",
//                                     textUnderlineOffset: "4px",
//                                     textShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
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



// export default function SVGExample() {
//     return (
//         <div className="svg-example">
//             <h2>Fun</h2>
//             <h2>Exercise</h2>
//             <h2>Safety</h2>
//         </div>
//     );
// }


