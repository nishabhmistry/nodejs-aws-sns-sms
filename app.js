const express = require('express');
const app = express();
require('dotenv').config();

var AWS = require('aws-sdk');

app.get('/', (req, res) => {

    var otp = Math.floor(1000 + Math.random() * 9000);

    var sns = new AWS.SNS();
    sns.setSMSAttributes({
        attributes: { DefaultSMSType: "Transactional" }
    },

    function (error) {
        if (error) {
            console.log(error);
        }
    });

    var params = {
        Message: "Welcome! your mobile verification code is: "+otp+" Mobile Number is:" + req.query.number,
        MessageStructure: 'string',
        PhoneNumber: '+' + req.query.number
    };

    sns.publish(params, function (err, data) {
        if (err) {
            console.log(err, err.stack); // an error occurred
        }
        else {
            console.log(data);           // successful response
            res.end(JSON.stringify(data));
        }
    });

});

app.listen(3000, () => console.log('SMS Service PORT 3000'))