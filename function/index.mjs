import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

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

        // Define the DynamoDB put operation
        const params = {
            TableName: "SZA_Email_Table", // Replace with your table name
            Item: {
                email: email,
                subscribedAt: new Date().toISOString(), // Add timestamp
                firstName: firstName,
                lastName: lastName,
            },
        };

        // Execute the DynamoDB operation
        await dynamoDB.send(new PutCommand(params));

        // Return success response
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Successfully subscribed to the newsletter!" }),
        };
    } catch (error) {
        console.error("Error handling request:", error);

        // Return internal server error response
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Internal server error" }),
        };
    }
};

