const { Router } = require("express")
const jwt = require("jsonwebtoken")

//utilizar las variables de entorno
require("dotenv").config()

//establecer router
const router = Router()

//importar modelo de usuarios
const User = require("../models/User")

//registro de usuario
router.post("/signup",async (req,res) => {
	const { email,password,password_repeat } = req.body

	if(password == password_repeat){
		if(!email || !password || !password_repeat){
			return res.json({
				status: -1,
				message: "Debe rellenar todos los campos"
			})
		}

		//crear instancia de usuario
		const user = new User({email,password})

		//cifrar constraseña
		user.password = await user.encryptPassword(user.password)

		//guardar al usuario en db
		await user.save()

		//generar token
		const token = jwt.sign({id: user._id},process.env.SECRET_KEY,{
			expiresIn: 60 * 60 * 24
		})

		res.json({
			auth: true, 
			token
		})
	}

	res.json({
		status: -2,
		message: "Las contraseñas no coinciden"
	})
})

//loguear usuario
router.post("/",async (req,res) => {
	const {email,password} = req.body

	//buscar al usuario
	const user = await User.findOne({email})

	//si no se encuentra al usuario
	if(!user){
		return res.sendStatus(404).json({
			message: "Usuario no encontrado"
		})
	}

	//validar contraseña
	const verify = await user.validatePassword(password)

	//en caso de no ser correcta
	if(!verify){
		return res.sendStatus(401).json({
			auth: false,
			message: "La contraseña es incorrecta"
		})
	}

	//generar token
	const token = jwt.sign({id: user._id},process.env.SECRET_KEY,{
		expiresIn: 60 * 60 * 24
	})

	res.json({
		auth: true,
		token
	})
})

module.exports = router;