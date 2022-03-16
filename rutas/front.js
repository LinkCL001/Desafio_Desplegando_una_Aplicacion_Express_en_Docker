const { Router } = require("express");
const db = require("../db")

const router = Router()

router.get("/", async (_, res) => {
  res.render("home", { users: await db.listar() })
})

router.get("/todo-create", (_, res) => {
  res.render("create")
})

router.post("/todo-create", (req, res) => {
  db.ingresar(req.body)
    .then(() => res.redirect("/"))
    .catch((err) => res.render("error", { title: "Error al crear usuario", message: err }))
})

router.get("/todo-delete/:id", async (req, res) => {
  const { id } = req.params
  const { confirmado } = req.query

  try {
    if (confirmado)
      await db.eliminar(id).then(() => res.redirect("/"))
    else
      res.render("delete", { user: await db.buscar(id) })
  } catch (err) {
    res.render("error", { title: "Error al eliminar usuario", message: err })
  }
})

module.exports = router