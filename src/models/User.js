const { Schema,model } = require("mongoose")

//importar bcrypt
const bcrypt = require("bcryptjs")

//esquema de usuario
const userSchema = new Schema({
	email: String,
	password: String
})

//encriptar contraseña
userSchema.methods.encryptPassword = async (password) => {
	const salt = await bcrypt.genSalt(10)
	return bcrypt.hash(password,salt)
}

//validar contraseña
userSchema.methods.validatePassword = function(password){
	return bcrypt.compare(password,this.password)
}

//exportar esquema
module.exports = model("User",userSchema)