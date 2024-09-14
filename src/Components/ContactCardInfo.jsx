import { Card, CardContent, Typography, Box } from '@mui/material';
import CustomButton from './CustomButton';

const ContactInfoCard = ({ title, contactDetails, email }) => {
    return (
        <Card style={{ marginBottom: '20px' }}>
            <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                    {title}
                </Typography>
                {contactDetails.map((detail, index) => (
                    <Typography variant="body1" gutterBottom key={index}>
                        <strong>{detail.label}:</strong> {detail.value}
                    </Typography>
                ))}
                {email && (
                    <Box mt={2}>
                        <CustomButton to={`mailto:${email}`} label="Email Us" className="email-button" />
                    </Box>
                )}
            </CardContent>
        </Card>
    );
};

export default ContactInfoCard;
