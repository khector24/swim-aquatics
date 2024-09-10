import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box'; // Import Box to handle layout
import '../Pages/pages-styles/home-sections.css/quoteImage.css'; // Import the CSS file

export default function QuoteImage() {
    const quotes = [
        {
            title: 'Have Fun and Play',
            description: 'Swimming is a fun way for kids to stay active, splashing around and enjoying the water while getting great exercise.',
            image: '/src/assets/images/quote-images/girl.jpg',
            alt: 'girl at the beach',
            icon: '/src/assets/images/icons/laugh.png' // Add icon for each quote
        },
        {
            title: 'Stay Fit',
            description: 'Swimming builds cardiovascular endurance, strength, and flexibility, improving overall physical fitness and body control.',
            image: '/src/assets/images/quote-images/girl.jpg',
            alt: 'girl at the beach',
            icon: '/src/assets/images/icons/fit.png'
        },
        {
            title: 'Learn Water Safety',
            description: 'Gain confidence in the water and learn essential water safety skills, to feel secure and independent while swimming.',
            image: '/src/assets/images/quote-images/girl.jpg',
            alt: 'girl at the beach',
            icon: '/src/assets/images/icons/save-water.png'
        }
    ];

    return (
        <div className="quote-container">
            {quotes.map((quote, index) => (
                <div key={index} className="quote-card">
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="300"
                                image={quote.image}
                                alt={quote.alt}
                            />
                            <CardContent className="text-area">
                                <Box display="flex" alignItems="center">
                                    <img
                                        src={quote.icon}
                                        alt={`${quote.title} icon`}
                                        style={{ marginRight: '10px', width: '30px', height: '30px' }}
                                    />
                                    <Typography className='quote-title' gutterBottom variant="h5" component="div">
                                        {quote.title}
                                    </Typography>

                                </Box>
                                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                    {quote.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            ))}
        </div>
    );
}



// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import CardActionArea from '@mui/material/CardActionArea';

// export default function QuoteImage({ image, title, description }) {
//     return (
//         <Card sx={{ maxWidth: 345 }}>
//             <CardActionArea>
//                 <CardMedia
//                     component="img"
//                     height="140"
//                     image={image}
//                     alt={title}
//                 />
//                 <CardContent>
//                     <Typography gutterBottom variant="h5" component="div">
//                         {title}
//                     </Typography>
//                     <Typography variant="body2" sx={{ color: 'text.secondary' }}>
//                         {description}
//                     </Typography>
//                 </CardContent>
//             </CardActionArea>
//         </Card>
//     );
// }

