
var AWS = require('aws-sdk');

// Create an S3 client
var s3 = new AWS.S3();

var date = new Date();
var files = new Array();
for(var i = 1; i < 3 ; i++) {
	filename='file'+i+"_"+("0" + (date.getMonth() + 1).toString()).substr(-2) + ("0" + date.getDate().toString()).substr(-2)+ (date.getFullYear().toString())+".csv";
	files.push(filename);
}
console.log(files);

fLen = files.length;
for (i = 0; i < fLen; i++) {
var params = {Bucket:"taggingtest", Key:files[i] }
var file = require('fs').createWriteStream("/Users/sumip/git-repo/aws-nodejs-sample/"+files[i]);
s3.getObject(params).createReadStream().pipe(file);
}
