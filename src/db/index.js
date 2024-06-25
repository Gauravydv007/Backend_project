// import mongoose from "mongoose";

// import { DB_NAME } from "../constants.js";

// // dotenv.config(); // Load environment variables

// const connectDB = async () => {

//     try{
//         const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         console.log(`\n MONGODB onnected !! DB HOST : $
//         { connectionInstance.connection.host}`);  
//     } catch (error) {
//         console.log("MONGODB connection error4", error );
//         process.exit(1)


//     }
// }


// export default connectDB







import mongoose from "mongoose";
import dotenv from "dotenv";
import { DB_NAME } from "../constants.js";

dotenv.config(); // Load environment variables

const connectDB = async () => {
    try {
        const uri = `${process.env.MONGODB_URI}/${DB_NAME}`;
        console.log('Connecting to MongoDB with URI:', uri); // Debug statement
        const connectionInstance = await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`\nMONGODB connected!! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MONGODB connection error", error);
        process.exit(1);
    }
};

export default connectDB;










// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import { DB_NAME } from "../constants.js";

// dotenv.config(); // Load environment variables

// const connectDB = async () => {
//     try {
//         const uri = `${process.env.MONGODB_URI}/${DB_NAME}`;
//         const connectionInstance = await mongoose.connect(uri, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log(`\nMONGODB connected!! DB HOST: ${connectionInstance.connection.host}`);
//     } catch (error) {
//         console.error("MONGODB connection error", error);
//         process.exit(1);
//     }
// };

// export default connectDB;
