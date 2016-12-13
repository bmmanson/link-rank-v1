process.env.DATABASE_URI = 'postgres://localhost:5432/linkrankv1';
process.env.FACEBOOK_APP_ID = require('./../../fb-credentials').ID;
process.env.FACEBOOK_SECRET = require('./../../fb-credentials').SECRET;

module.exports = {
    "DATABASE_URI": process.env.DATABASE_URI,
    "FACEBOOK_APP_ID": process.env.FACEBOOK_APP_ID,
    "FACEBOOK_SECRET": process.env.FACEBOOK_SECRET,
};