// import dotenv from "dotenv";
// import mongoose from "mongoose";

// dotenv.config();

// const uri = process.env.DATABASE_URL;

// mongoose.connect(uri);

// async function connectToDatabase() {
//   try {
//     await mongoose.connect(uri);
//     console.log("Database connected");
//   } catch (error) {
//     console.error("Database connection error:", error);
//   }
// }

// export default connectToDatabase;

import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();  // Load environment variables from .env file
const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch (error) {
    console.error("Database connection error:", error);
  }
};

export default connectToDatabase;

