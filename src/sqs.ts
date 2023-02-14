var AWS = require('aws-sdk');
AWS.config.update({region: 'ap-southeast-1'});
var sqs = new AWS.SQS({apiVersion: '2012-11-05'});

var params = {
  MessageBody: "hello",
  QueueUrl: "arn:aws:lambda:ap-southeast-1:018940819549:function:sqstestfunction"
};