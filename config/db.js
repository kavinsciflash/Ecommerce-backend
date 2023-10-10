import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {

  
const MONGO_URL="mongodb+srv://kavinprasanth:Kavin1234@cluster0.komukur.mongodb.net/ecommerce";

  try {
    const conn = await mongoose.connect(MONGO_URL);
    console.log(`connected to MongoDB Database ${conn.connection.host}`.bgMagenta.white);
  } catch (error) {
    console.log(`Error in MongoDB ${error}`.bgRed.white);
  }
};

export default connectDB;
