const { Fruit } = require("../models/Fruit");

// Confs
const APP_VERSION = "2.0";


// Resolvers
exports.resolvers = {
    Query: {
        app_name: () => `Easyship v${APP_VERSION}`,
        fruits: () => Fruit.find()
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