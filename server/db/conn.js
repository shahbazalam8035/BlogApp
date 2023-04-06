const mongoose = require("mongoose");
const DB ="mongodb+srv://admin:hybxV7LDhFa3WYzz@cluster0.wh6sjvn.mongodb.net/Blog?retryWrites=true&w=majority";
mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log(`database connection successfull `)
}).catch((err)=>{
    console.log("databse connection loss");
})
