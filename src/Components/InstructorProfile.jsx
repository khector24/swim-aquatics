import { Card, CardContent, Typography, Grid2, Stack, CardMedia } from '@mui/material';



export default function InstructorProfile({ name, description, img }) {
    return (
        <Card className="instructor-profile" style={{ maxWidth: 400, margin: 'auto' }}>
            <CardMedia
                component="img"
                alt={`${name} - Swim Instructor`}
                height="300"
                image={img}
                style={{ borderRadius: '10px' }}
            />
            <CardContent style={{ backgroundColor: '#4F75FF', }}>
                <Typography
                    style={{
                        color: '#FFD94F',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)'
                    }}
                    gutterBottom
                    variant="h5"
                    component="div">
                    {name}
                </Typography>
                <Typography
                    style={{
                        color: 'white',
                    }}
                    variant="body2"
                    color="text.secondary"
                >
                    {description}
                </Typography>
            </CardContent>
        </Card >
    );
}