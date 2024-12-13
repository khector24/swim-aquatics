import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { UpdateCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const dynamoDB = DynamoDBDocumentClient.from(client);

export const handler = async (event) => {
    try {
        // Validate the request
        if (!event.body) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: "Request body is missing!" }),
            };
        }

        const { email } = JSON.parse(event.body);

        if (!email) {
            return {
                statusCode: 400,
                body: JSON.stringify({ message: "Email is required!" }),
            };
        }

        // Update the user's subscription status in DynamoDB
        const updateParams = {
            TableName: "SZA_Email_Table", // Replace with your table name
            Key: { email: email },
            UpdateExpression: "SET isSubscribed = :status",
            ExpressionAttributeValues: { ":status": false },
        };

        await dynamoDB.send(new UpdateCommand(updateParams));

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Successfully unsubscribed!" }),
        };
    } catch (error) {
        console.error("Error:", error);

        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Internal server error" }),
        };
    }
};
