const { default: mongoose } = require("mongoose")

async function getConnect(){
   try{
      //   await mongoose.connect("mongodb://localhost:27017/ecom_server")
      await mongoose.connect(process.env.DB_KEY)

        console.log("Database connected successfully")
   }catch(error){
    console.log(error)
   }
}

getConnect()