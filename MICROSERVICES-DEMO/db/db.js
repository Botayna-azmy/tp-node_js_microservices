const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModifiy: false,
    useCreateIndex: true
}).then(()=>{
    console.log('Connection successful!');
}).catch((e) =>{
    console.log('Connection failed!');
})