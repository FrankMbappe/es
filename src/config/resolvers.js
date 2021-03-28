const { Fruit } = require("../models/Fruit");
const { twilio } = require("./twilio-auth"); // Twilio config
const client = require("twilio")(twilio.accountSID, twilio.authToken); // SMS Verification


// Confs
const APP_VERSION = "2.0";


// Resolvers
exports.resolvers = {
    Query: {
        app_name: () => `Easyship v${APP_VERSION}`,
        fruits: () => Fruit.find(),
        login: async (_, { phone }) => {
            let twilioResponse = null;
            await client.verify.services(twilio.serviceID)
                .verifications
                .create({ to: phone, channel: 'sms' })
                .then((verification) => {
                    twilioResponse = {
                        isApproved: false,
                        createdOn: verification.dateCreated.toDateString(),
                        updatedOn: verification.dateUpdated.toDateString(),
                        attempts: verification.sendCodeAttempts.length,
                        ...verification
                    }
                    console.log(`[resolvers, login()] | To: ${verification.to}, Status: ${verification.status}...`);
                }, err => console.error('[resolvers, login()] | ' + err));
            return twilioResponse;
        },
        verify: async (_, { phone, code }) => {
            let twilioResponse = null;
            await client.verify.services(twilio.serviceID)
                .verificationChecks
                .create({ to: phone, code: code })
                .then((verification) => {
                    twilioResponse = {
                        isApproved: verification.status === "approved",
                        createdOn: verification.dateCreated.toDateString(),
                        updatedOn: verification.dateUpdated.toDateString(),
                        ...verification
                    }
                    console.log(`[resolvers, verify()] | To: ${verification.to}, Status: ${verification.status}.`);
                }, err => console.error('[resolvers, verify()] | ' + err));
            return twilioResponse;
        }
    },
    Mutation: {
        addFruit: async (_, { name }) => {
            const fruit = new Fruit({ name });
            await fruit.save();
            return fruit;
        },
        delFruit: async (_, { id }) => {
            try {
                await Fruit.findOneAndDelete({ "_id": id });
                return true;
            }
            catch (e) { return false }
        }
    }
};