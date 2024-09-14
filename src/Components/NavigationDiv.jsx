import { NavLink } from 'react-router-dom';
import { Card, CardMedia, CardContent, Button } from '@mui/material';
import "../Components/component-styles.css/navigation-div.css";

export default function NavigationDiv({ to, label, img }) {
    return (
        <Card sx={{
            position: 'relative',
            borderRadius: '10px',
            overflow: 'hidden',
            height: 160,
            marginBottom: 2
        }}>
            <CardMedia
                component="img"
                image={img}
                alt={label}
                className="card-media"
            />
            <CardContent className="card-content">
                <Button
                    component={NavLink}
                    to={to}
                    className="button-link"
                >
                    {label}
                </Button>
            </CardContent>
        </Card>
    );
}


// import { NavLink } from 'react-router-dom';
// import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
// import "../Components/component-styles.css/navigation-div.css"


// export default function NavigationDiv({ to, label, img }) {
//     return (
//         <Card sx={{ position: 'relative', borderRadius: '10px', overflow: 'hidden', height: 160, marginBottom: 2 }}>
//             <CardMedia
//                 component="img"
//                 image={img}
//                 alt={label}
//                 sx={{ height: '100%', objectFit: 'cover', opacity: 0.8 }}
//             />
//             <CardContent
//                 sx={{
//                     position: 'absolute',
//                     bottom: 8,
//                     left: 16,
//                     right: 16,
//                     padding: '0 8px',
//                     background: 'rgba(0, 0, 0, 0.5)',
//                     borderRadius: '5px',
//                     textAlign: 'center',
//                 }}
//             >
//                 <Button
//                     component={NavLink}
//                     to={to}
//                     sx={{
//                         color: '#FFD94F',
//                         fontWeight: 'bold',
//                         textDecoration: 'none',
//                         textShadow: '2px 2px 4px rgba(0, 0, 0, 0.9)',
//                         padding: '6px 12px',
//                         borderBottom: '3px solid transparent',
//                         '&:hover': {
//                             color: '#FFDD57',
//                             borderBottom: '3px solid #FFDD57',
//                         },
//                     }}
//                 >
//                     {label}
//                 </Button>
//             </CardContent>
//         </Card>
//     );
// }



// import { NavLink } from 'react-router-dom';
// import "../Components/component-styles.css/navigation-div.css"

// export default function NavigationDiv({ to, label, img }) {
//     return (
//         <div
//             className="container"
//             style={{
//                 backgroundImage: `url(${img})`,
//             }}>
//             <NavLink to={to}>{label}</NavLink>
//         </div >
//     )
// }   