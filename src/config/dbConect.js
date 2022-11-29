import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config()

const password = process.env.MONGO_PASSWORD
const username = process.env.MONGO_USER
const database = process.env.MONGO_DATABASE

const mongoUri = `mongodb+srv://${username}:${password}@cluster-nodeexpress.7wpua2o.mongodb.net/${database}`

mongoose.connect(mongoUri);

let db = mongoose.connection;

export default db; 

