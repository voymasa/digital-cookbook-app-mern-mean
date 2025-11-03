const mongoConfig = {
    development: {
        uri: process.env.MONGO_URI_DEV,
        options: {
            maxPoolSize: 5,
            serverSelectionTimeoutMS: 5000,
            socketTimeoutMS: 45000,
            autoIndex: true
        }
    },
    production: {
        uri: process.env.MONGO_URI_PROD,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            maxPoolSize: 20,
            serverSelectionTimeoutMS: 30000,
            socketTimeoutMS: 45000,
            autoIndex: true,
            retryWrites: true,
            w: 'majority'
        }
    }
};

module.exports = mongoConfig[process.env.NODE_ENV || 'development'];