
import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js"; // 👈 Add `.js` if using ES Modules
import connectDB from "./db/index.js";



connectDB()






/*import express from "express";

const app = express();

(async () => {
  try {
    // ✅ Make sure MONGODB_URI is defined
    if (!process.env.MONGODB_URI || !process.env.PORT) {
      throw new Error("Missing MONGODB_URI or PORT in environment variables");
    }

    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    app.on("error", (error) => {
      console.error("Express Error:", error);
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Startup Error:", error);
    process.exit(1); // 👈 Proper way to exit on error
  }
})(); */
