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
  "AcmCertArn": "arn:aws:acm:us-east-1:xxxxxx",
  "Domain": "mydomain.com",
  "HostedZoneRoute53": "xxxxxxxxxx",
  "BucketS3": "mybucket",
  "TableDynamoDB": "Posts"
}
```

#### Step 2: Create ressources (S3 Bucket, CloudFront CDN, DynamoDB Table, Route 53 Configuration)
> may take more than 15 minutes (due to the creation of a CloudFront Distribution).

$ sls deploy

#### Step 3: Deploy API

$ cd api\
$ npm install\
$ sls deploy

#### Step 4: Deploy Frontend
$ cd frontend\
$ npm install\
$ npm run build\
$ npm run deploy
