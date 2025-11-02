const mongoConfig = {
    development: {
        uri: process.env.MONGO_URI_DEV,
        options: {
            maxPoolSize: 5,
            serverSelectionTimeoutMS: 5000
        }
    },
    production: {
        uri: process.env.MONGO_URI_PROD,
        options: {
            maxPoolSize: 20,
            serverSelectionTimeoutMS: 30000,
            retryWrites: true,
            w: 'majority'
        }
    }
};

module.exports = mongoConfig[process.env.NODE_ENV || 'development'];