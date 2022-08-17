

import mongoose from "mongoose";
import dotenv from "dotenv";

export class Database {
    
  static async init() {
    dotenv.config();
    const URI = process.env.MONGODB_URI;

mongoose.connect("mongodb://localhost:27017/test", {

useNewUrlParser: true, 

useUnifiedTopology: true 

}, err => {
if(err) throw err;
console.log('Connected to MongoDB!!!')
});
    
  }
}
