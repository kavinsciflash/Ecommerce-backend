import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {

  
// MONGO_URL="mongodb+srv://surbhikumari6061:YC8WrfxL2PnhwjZk@cluster0.fga4ome.mongodb.net/ecommerce"
  try {
    const conn = await mongoose.connect('mongodb+srv://surbhikumari6061:YC8WrfxL2PnhwjZk@cluster0.fga4ome.mongodb.net/ecommerce');
    console.log(`connected to MongoDB Database ${conn.connection.host}`.bgMagenta.white);
  } catch (error) {
    console.log(`Error in MongoDB ${error}`.bgRed.white);
  }
};

export default connectDB;
