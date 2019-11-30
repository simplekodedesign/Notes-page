const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/skd_notes",{
	useNewUrlParser: true,
	useUnifiedTopology: true 
})
	.then(db => console.log("DB Connected"))
	.catch(err => console.log("Something worng"));