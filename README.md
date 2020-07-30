
npm install

Create AWS IAM user and assign 'AmazonSNSFullAccess'

set AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY and AWS_REGION in the .env file.

node app.js

Open browser and visit something like,

http://localhost:3000?number=[The Number]

The mobile number should be E.164 format but without the + character.


