const { Router } = require("express")
const jwt = require("jsonwebtoken")

//utilizar las variables de entorno
require("dotenv").config()

//establecer router
const router = Router()

//importar modelo de tareas
const Task = require("../models/Task")

//crear nota
router.post("/create",ensureToken,async (req,res) => {
	const {title,message} = req.body
	const user_id = req.user_id
	var date = new Date()

	date = date.getDate() + "-" + (date.getMonth()+1) + "-" + date.getFullYear()

	//validar que se enviaron los datos necesarios
	if(!title || !message){
		return res.sendStatus(401).json({
			message: "Debe rellenar todos los campos"
		})
	}

	//crear la instancia de notas
	const task = new Task({user_id,title,message,date})

	//guardar la nota
	await task.save()

	res.json({status: "success"})
})

//buscar las notas de un usuario
router.get("/",ensureToken,async (req,res) => {
	const user_id = req.user_id
	const tasks = await Task.find({user_id})
	res.json(tasks)
})

//asegurarse que el token esta creado
function ensureToken(req,res,next){
	//revisar si la cabecera autorization existe
	const bearerHeader = req.headers["autorization"]

	//validar el bearerHeader
	if(typeof bearerHeader !== "undefined"){
		const bearer = bearerHeader.split(" ") //partir el bearerHeader
		const bearerToken = bearer[1] //el token es el segundo
		req.token = bearerToken //guardar en el objeto de la peticion

		//decifrar el token
		const decoded = jwt.verify(req.token,process.env.SECRET_KEY)
		
		//guardar el id del usuario para compartirlo con las otras rutas
		req.user_id = decoded.id

		next() //avanzar a la siguiente function
	}else{
		res.sendStatus(403)
	}
}

//exportar router
module.exports = router;
