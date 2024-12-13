import AWS from 'aws-sdk';

AWS.config.update({ region: 'us-east-1' }); // Update region if needed

const ses = new AWS.SES();
const SENDER_EMAIL = 'splashzoneaquatics@gmail.com';
const businessContent = 'If you have any questions, please contact us at 845-825-7038 .';

// Helper function to send a welcome email
const sendWelcomeEmail = async (firstName, lastName, email) => {
    const customerContent = `Dear ${firstName} ${lastName},\n\nWelcome to Splash Zone Aquatics! We’re excited to have you onboard. Stay tuned for updates, special offers, and much more.`;
    const unsubscribeLink = `\n\nTo unsubscribe, click here: https://yourdomain.com/unsubscribe?email=${encodeURIComponent(email)}`;
    const emailContent = `${customerContent}${unsubscribeLink}\n\n${businessContent}`;

    const params = {
        Destination: {
            ToAddresses: [email],
        },
        Message: {
            Body: {
                Text: {
                    Charset: 'UTF-8',
                    Data: emailContent,
                },
            },
            Subject: {
                Charset: 'UTF-8',
                Data: 'Welcome to Splash Zone Aquatics!',
            },
        },
        Source: SENDER_EMAIL,
    };

    try {
        await ses.sendEmail(params).promise();
        console.log('Welcome email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

// Helper function to send an unsubscribe confirmation email
const sendUnsubscribeEmail = async (firstName, lastName, email) => {
    const emailContent = `Dear ${firstName} ${lastName},\n\nWe're sorry to see you go. You have successfully unsubscribed from Splash Zone Aquatics. We hope to have you back soon!`;
    const params = {
        Destination: {
            ToAddresses: [email],
        },
        Message: {
            Body: {
                Text: {
                    Charset: 'UTF-8',
                    Data: emailContent,
                },
            },
            Subject: {
                Charset: 'UTF-8',
                Data: 'You have been unsubscribed from Splash Zone Aquatics',
            },
        },
        Source: SENDER_EMAIL,
    };

    try {
        await ses.sendEmail(params).promise();
        console.log('Unsubscribe email sent successfully');
    } catch (error) {
        console.error('Error sending unsubscribe email:', error);
    }
};

export const handler = async (event) => {
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
};
