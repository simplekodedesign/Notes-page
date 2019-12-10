const express = require("express")
const morgan = require("morgan")
const path = require("path")

//conexion a base de datos
require("./database")

//inicializar el servidor
const app = express()

//configuraciones

//definir puerto
app.set("port",process.env.PORT || 3000)

//middlewares
app.use(morgan("dev")) //ver peticiones que recibe el servidor por consola
app.use(express.json()) //establecer que el intercambio de datos cliente/servidor sera en formato json

//archivos estaticos
app.use(express.static(path.join(__dirname,"public")))

//routes

//login
app.use("/login",require("./routes/login.router"))

//tasks
app.use("/tasks",require("./routes/task.router"))

//arrancar servidor
app.listen(app.get("port"),() => {
	console.log("Server on port: "+app.get("port"))
})