"use strict";
var exec = require('child_process').exec;
var bucket = require("../config").Bucket;
exec("aws s3 cp ./index.html s3://" + bucket, function (error) { return error ? console.log(error) : console.log("Upload index.html successful"); });
exec("aws s3 cp ./dist/bundle.js s3://" + bucket + "/dist/", function (error) { return error ? console.log(error) : console.log("Upload dist/bundle.js successful"); });
//# sourceMappingURL=deployToS3.js.map