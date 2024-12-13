import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutCommand, GetCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

// Create the DynamoDB client and DocumentClient
const client = new DynamoDBClient({});
const dynamoDB = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
    try {
        // Validate the presence of a body
        if (!event.body) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: "Request body is missing!" }),
            };
        }

        let body;
        try {
            // Attempt to parse the JSON body
            body = JSON.parse(event.body);
        } catch (parseError) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: "Invalid JSON in request body!" }),
            };
        }

        const { email, firstName, lastName } = body;

        // Validate required fields
        if (!email) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: "Email is required!" }),
            };
        }

        if (!firstName || !lastName) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: "First name and last name are required!" }),
            };
        }

        // Check if the email already exists in the table
        const getParams = {
            TableName: "SZA_Email_Table",
            Key: { email: email },
        };

        const existingItem = await dynamoDB.send(new GetCommand(getParams));

        if (existingItem.Item) {
            if (existingItem.Item.isSubscribed) {
                // If the email exists and isSubscribed is true, return an error
                return {
                    statusCode: 400,
                    body: JSON.stringify({ message: "This email is already subscribed!" }),
                };
            } else {
                // If the email exists but isSubscribed is false, overwrite the entire item
                const putParams = {
                    TableName: "SZA_Email_Table",
                    Item: {
                        email: email,
                        subscribedAt: new Date().toISOString(),
                        firstName: existingItem.Item.firstName,
                        lastName: existingItem.Item.lastName,
                        isSubscribed: true,
                    },
                };

                await dynamoDB.send(new PutCommand(putParams));

                return {
                    statusCode: 200,
                    body: JSON.stringify({ message: "Successfully re-subscribed to the newsletter!" }),
                };
            }
        }

        // If the email doesn't exist, add a new record
        const putParams = {
            TableName: "SZA_Email_Table",
            Item: {
                email: email,
                subscribedAt: new Date().toISOString(),
                firstName: firstName,
                lastName: lastName,
                isSubscribed: true,
            },
        };

        await dynamoDB.send(new PutCommand(putParams));

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Successfully subscribed to the newsletter!" }),
        };
    } catch (error) {
        console.error("Error handling request:", error);

        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Internal server error" }),
        };
    }
};


