const mongoose = require("mongoose");

//utilizar las variables de entorno
require("dotenv").config();

mongoose.connect(process.env.URL_DATABASE,{
	useNewUrlParser: true,
	useUnifiedTopology: true 
})
	.then(db => console.log("DB Connected"))
	.catch(err => console.log("Something worng"));