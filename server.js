const express = require("express")
const bodyParser = require("body-parser")
const { engine } = require("express-handlebars")
const front = require("./rutas/front")
const api = require("./rutas/api")

const port = process.env.PORT || 4000
const app = express()

const formatear = (key, data) => ({
  fecha: () => new Date(data).toISOString().split('T')[0]
}[key]())

app.engine("handlebars", engine({ helpers: { formatear } }))

app.set("view engine", "handlebars")
app.set("views", "./views")
// ● Además, debes crear un sistema de vistas con Handlebars que contenga las
// siguientes rutas:

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(front)
// / Listado de tareas con un link hacia ‘/todo-create’ Cada todos, debe contener un link hacia el formulariode eliminación
// /todo-create Un formulario para crear tareas
// /todo-delete/:id Un formulario de confirmacion de eliminacion
app.use(api)
// 1. Crear una API con los servicios antes mencionados.
// a. Crear
// b. Listar
// c. Eliminar
app.listen(port, () => {
  console.log(`escuchando en el puerto ${port}`)
})
// // 6. Proyecto debe ejecutar conectado satisfactoriamente a la base de datos e iniciando
// // el proyecto con todas sus vistas y endpoint en el puerto 4000 con Docker.








// 2. Se debe configurar variables de entorno en el archivo .env para proteger los datos sensibles del código
// 3. Crear las vistas mencionadas en las instrucciones.
// a. Crear
// b. Listar
// c. Confirmar eliminación
// 4. Configurar Dockerfile y .dockerignore para cumplir con los requisitos de despliegue
//  con Docker.
// 5. Agregar instrucciones para levantar el proyecto en Docker en el archivo README.md
