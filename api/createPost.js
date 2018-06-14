const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB();
const uuidv4 = require('uuid/v4');

const corsHeader = {
    "Access-Control-Allow-Origin": "*"
};

exports.handler = async (event) => {

    const body = JSON.parse(event.body);

    const params = {
        TableName: process.env.PostsTable,
        Item: {
            Id: {
                S: uuidv4(),
            },
            message: {
                S: body.message,
            },
            timestamp: {
                N: "" + Date.now(),
            },
        }
    };

    try {
        const response = await dynamo.putItem(params).promise();
        return {"statusCode": 200, "body": JSON.stringify({error: ""}), headers: corsHeader};
    } catch (err) {
        return {"statusCode": 500, "body": JSON.stringify({error: err}), headers: corsHeader};
    }
};
