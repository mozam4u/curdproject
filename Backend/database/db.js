import mongoose from "mongoose";
const Connection= async(dbcon)=>{
     const URL='mongodb://localhost:27017/mydb5';

     try {
        await mongoose.connect(URL,{useUnifiedTopology:true,useUnifiedTopology:true});
        console.log('databases connect successfully');

         
     } catch (error) {
         console.log('error: while connecting with database ',error.message);
         
     }

 }
 export default Connection;