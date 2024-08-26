import mongoose from "mongoose";

const connectDB = async () => {
    try{
        if(mongoose.connection.readyState === 0) {
            await mongoose.connect(process.env.MONGODB_URI)
            console.log('MongoDB connected');
        }
    }
    catch(e){
        console.log(e);
        // process.exit(1);
    }
}

export default connectDB;