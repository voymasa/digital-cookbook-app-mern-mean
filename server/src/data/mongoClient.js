import mongoose from 'mongoose';
import { mongoConfig } from './mongoConnection';

const uri = 'mongodb://' + mongoConfig.uri + '/mealbrain';

async function openConnection() {
    try {
        await mongoose.connect(uri, mongoConfig.options);
        console.log('Connected to collection: ${collection}');
    } catch (error) {
        console.error(error);
    }
}

async function closeConnection() {
    try {
        await mongoose.disconnect();
        console.log('Disconnected from MongoDB');
    } catch (error) {
        console.error(error);
    }
}

export { openConnection, closeConnection };