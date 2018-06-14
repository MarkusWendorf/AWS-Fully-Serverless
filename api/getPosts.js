
const AWS = require("aws-sdk");
const dynamo = new AWS.DynamoDB();
const unmarshall = AWS.DynamoDB.Converter.unmarshall;
const uuidv4 = require('uuid/v4');

const corsHeader = {
    "Access-Control-Allow-Origin": "*"
};

exports.handler = async (event) => {

    const params = {
        TableName: process.env.PostsTable,
    };

    try {
        const response = await dynamo.scan(params).promise();
        const posts = response.Items.map(unmarshall);

        return {"statusCode": 200, "body":  JSON.stringify({data: posts, error: ""}), headers: corsHeader};
    } catch (err) {
        return {"statusCode": 500, "body":  JSON.stringify({error: err, headers: corsHeader})};
    }
};
