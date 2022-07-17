

const credentials = {
    apiKey: process.env.AFRICASTALKING_KEY || '9a293e73d7e8ad135f6a600f4881394944a9c03b84d04ba7ba63370a44cbc2f9',
    username: process.env.AFRICASTALKING_USERNAME || 'sandbox',
};
const Africastalking = require('africastalking')(credentials);

// Initialize a service e.g. SMS
exports.sms = Africastalking.SMS
