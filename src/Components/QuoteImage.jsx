import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

export default function QuoteImage() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image="/src/assets/images/quote-images/girl.jpg"
                    alt="girl at the beach"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Girl In Water
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
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

