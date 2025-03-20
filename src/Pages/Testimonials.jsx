import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import "../Pages/pages-styles/testimonials.css"
import ReviewRating from '../Components/ReviewRating';

export default function Testimonials() {
    const reviews = [
        {
            id: 1,
            title: "Ethan's Expertise Shines Through!",
            content: "My child's swimming journey at Splash Zone Aquatics has been nothing short of amazing, thanks to Ethan's expertise. As a parent, I feel reassured knowing that Ethan, a highly experienced swim instructor, is personally involved in every aspect of the classes. He's incredibly friendly with the kids, making them feel comfortable and confident in the water. With his guidance, my child has made significant progress and truly enjoys every lesson. Kudos to Ethan for creating a nurturing environment where kids succeed in swimming!",
            rating: 5,
            author: "Michelle Reddick"
        },
        {
            id: 2,
            title: "Exceptional Swim Instruction by Ethan!",
            content: "If you're looking for exceptional swim instruction for your children, look no further than Splash Zone Aquatics, owned and operated by the talented Ethan. As a parent, I appreciate Ethan's dedication and passion for teaching kids how to swim. He has an innate ability to connect with children, making the learning process fun and engaging. Under his guidance, my child has become a confident swimmer, and I couldn't be happier with the results.",
            rating: 5,
            author: "Sallah Jones"
        },
        {
            id: 3,
            title: "Swim Success with Ethan!",
            content: "My child's progress in swimming has been remarkable, all thanks to Ethan's exceptional teaching at Splash Zone Aquatics. As the owner and operator, Ethan brings his wealth of experience and friendly demeanor to each lesson. He truly cares about the kids' development and goes above and beyond to help them succeed in swimming.",
            rating: 5,
            author: "Toni"
        },
        {
            id: 4,
            title: "Ethan - The Heart of Splash Zone Aquatics!",
            content: "Ethan's passion for swimming and his genuine love for teaching shine brightly at Splash Zone Aquatics. It's clear that he takes great pride in owning and operating this fantastic swim school. My child has grown immensely under his guidance, and I'm constantly impressed with Ethan's ability to make every lesson enjoyable and educational.",
            rating: 5,
            author: "Mason R."
        }
    ];

    return (
        <div className="reviews">
            <Box sx={{ margin: '2rem 0' }}>
                <Typography
                    variant="h4"
                    sx={{
                        textAlign: 'center',
                        mb: 4,
                        mt: 5,
                        color: "#4F75FF"
                    }}>
                    Notable Reviews
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: 4
                    }}>
                    {reviews.map(review => (
                        <Card
                            key={review.id}
                            sx={{
                                flex: '1 1 45%',
                                border: '1px solid #007bff',
                                borderRadius: '0.25rem',
                                padding: '1rem',
                                backgroundColor: "#4F75FF"
                            }}>
                            <CardContent className='star-review'>
                                <Typography sx={{ color: 'white' }} variant="h6" gutterBottom>{review.title}</Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                    {review.content}
                                </Typography>
                                <ReviewRating className='star' value={review.rating} />
                                <p className="author">- {review.author}</p>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Box>
        </div>
    );
}

