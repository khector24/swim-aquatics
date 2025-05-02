import resend from 'resend';
import AWS from 'aws-sdk';

AWS.config.update({ region: 'us-east-1' }); // Update region if needed

const ses = new AWS.SES();
const SENDER_EMAIL = 'splashzoneaquatics@gmail.com';
const businessContent = 'If you have any questions, please contact us at 845-659-6405.';
const endPhrase = "- Team at Splash Zone Aquatics";

// Initialize Resend client with API Key from environment variable
const resendClient = new resend(process.env.RESEND_API_KEY);

// Helper function to send a welcome email using Resend API
const sendWelcomeEmail = async (firstName, lastName, email) => {
    const customerContent = `Dear ${firstName} ${lastName},\n\nWelcome to Splash Zone Aquatics! We’re excited to have you onboard. Stay tuned for updates, special offers, and much more.`;
    const unsubscribeLink = `\n\nTo unsubscribe, click here: https://splashzoneaquatics.com/unsubscribe?email=${encodeURIComponent(email)}`;
    const emailContent = `${customerContent}${unsubscribeLink}\n\n${businessContent}\n\n${endPhrase}`;

    try {
        const response = await resendClient.emails.send({
            from: 'splashzoneaquatics@gmail.com',
            to: email,
            subject: 'Welcome to Splash Zone Aquatics!',
            html: `<p>${emailContent}</p>`
        });
        console.log('Welcome email sent successfully', response);
    } catch (error) {
        console.error('Error sending welcome email:', error);
    }
};

// Helper function to send an unsubscribe confirmation email using Resend API
const sendUnsubscribeEmail = async (firstName, lastName, email) => {
    const emailContent = `Dear ${firstName} ${lastName},\n\nWe're sorry to see you go. You have successfully unsubscribed from Splash Zone Aquatics. We hope to have you back soon!\n\n${endPhrase}`;

    try {
        const response = await resendClient.emails.send({
            from: 'splashzoneaquatics@gmail.com',
            to: email,
            subject: 'You have been unsubscribed from Splash Zone Aquatics',
            html: `<p>${emailContent}</p>`
        });
        console.log('Unsubscribe email sent successfully', response);
    } catch (error) {
        console.error('Error sending unsubscribe email:', error);
    }
};

export const handler = async (event) => {
    try {
        console.log('Received event:', JSON.stringify(event, null, 2));

        for (const record of event.Records) {
            console.log(record.eventID);
            console.log(record.eventName);

            if (record.eventName === 'INSERT') {
                // Extract the new image data from the DynamoDB stream (for subscription)
                const newImage = AWS.DynamoDB.Converter.unmarshall(record.dynamodb.NewImage);
                console.log('New Image:', JSON.stringify(newImage, null, 2));

                const { email, firstName, lastName } = newImage;

                if (email && firstName && lastName) {
                    await sendWelcomeEmail(firstName, lastName, email);
                } else {
                    console.error('Missing required fields for sending email:', { email, firstName, lastName });
                }
            } else if (record.eventName === 'MODIFY') {
                // Extract the modified data (for unsubscription)
                const oldImage = AWS.DynamoDB.Converter.unmarshall(record.dynamodb.OldImage);
                const newImage = AWS.DynamoDB.Converter.unmarshall(record.dynamodb.NewImage);
                console.log('Old Image:', JSON.stringify(oldImage, null, 2));
                console.log('New Image:', JSON.stringify(newImage, null, 2));

                // Check if the subscription status changed (i.e., unsubscribed)
                if (oldImage.isSubscribed !== newImage.isSubscribed && newImage.isSubscribed === false) {
                    const { email, firstName, lastName } = newImage;

                    if (email && firstName && lastName) {
                        await sendUnsubscribeEmail(firstName, lastName, email);
                    } else {
                        console.error('Missing required fields for unsubscribe email:', { email, firstName, lastName });
                    }
                }
            }
        }
    } catch (error) {
        console.error('Error in Lambda handler:', error);
    }
};
