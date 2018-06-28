# AWS-Fully-Serverless

A fully serverless application running on AWS.

## Requirements

* AWS Account
* Node.js + NPM
* AWS CLI
* Serverless Framework

Additionally:

* A registered domain (imported to AWS Route 53)
* A certificate for that domain (request a certificate via AWS Certificate Manager)

#### Step 1: Configure

Fill in config.json
```javascript
{
  "BucketS3": "mybucket", // choose a bucket name, will be created for you
  "TableDynamoDB": "Posts" // choose a table name, will be created for you
}
```

#### Step 2: Create ressources (S3 Bucket, DynamoDB Table)

$ sls deploy

#### Step 3: Deploy API

$ cd api\
$ npm install\
$ sls deploy

#### Step 4: Deploy Frontend
$ cd frontend\
$ npm install\

Fill in the endpoint of the api to api.tsx
$ npm run build\
$ npm run deploy
