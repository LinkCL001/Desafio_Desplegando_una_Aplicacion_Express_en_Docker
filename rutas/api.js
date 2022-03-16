const { Router } = require("express");
const db = require("../db")

const router = Router()

router.get("/todos", (_, res) => {
  db.listar()
    .then(users => res.json(users))
    .catch((error) => res.json({ error }))
})

router.post("/todos", (req, res) => {
  db.ingresar(req.body)
    .then(() => res.json({ message: "creado" }))
    .catch((error) => res.json({ error }))
})

router.delete("/todos/:id", (_, res) => {
  db.eliminar(id)
    .then(() => res.json({ message: "eliminado" }))
    .catch((error) => res.json({ error }))
})

module.exports = router