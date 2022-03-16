require("dotenv").config()
const { Pool } = require('pg')

const connectionString = process.env.DATABASE_URL

const pool = new Pool(connectionString ? ({ connectionString, ssl: { rejectUnauthorized: false } }) : undefined)

const listar = () => pool.query('SELECT * FROM todos').then((res) => res.rows)
const buscar = (id) => pool.query('SELECT * FROM todos WHERE id = $1', [id]).then((res) => res.rows[0])
const ingresar = (x) => pool.query('INSERT INTO todos(nombre,descripcion) VALUES($1,$2)', [x.nombre, x.descripcion])
const eliminar = (id) => pool.query('DELETE FROM todos WHERE id = $1', [id])

module.exports = { listar, buscar, ingresar, eliminar }