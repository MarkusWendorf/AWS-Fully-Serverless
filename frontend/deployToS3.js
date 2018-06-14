const exec = require('child_process').exec;
const bucket = require("../config").Bucket;

exec("aws s3 cp ./index.html s3://" + bucket,
    (error) => error ? console.log(error) : console.log("Upload index.html successful"));

exec("aws s3 cp ./dist/bundle.js s3://" + bucket + "/dist/",
    (error) => error ? console.log(error) : console.log("Upload dist/bundle.js successful"));