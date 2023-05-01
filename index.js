const express=require("express")
const bodyParser=require("body-parser")
const connection=require("./Database/connection");
const employeerouter=require("./Routes/route")
const app= express();

app.use(bodyParser.json())
app.use(employeerouter);

app.listen(5000,  async()=>{
    try{
        await connection;
        console.log(`sever is running on 5000`)
    }
    catch(err){
        console.log(err)
    }
});