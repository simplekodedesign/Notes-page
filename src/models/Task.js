const { Schema,model } = require("mongoose")
const mongoose = require("mongoose")
const User = mongoose.model("User")

//esquema de tarea
const taskSchema = new Schema({
	user_id: { type: Schema.ObjectId, ref: "User" },
	title: String,
	message: String,
	date: String
})

//exportar esquema
module.exports = model("Task",taskSchema)