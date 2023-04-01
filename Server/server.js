import express from "express"
import cors from "cors"
//const express = require('express')   //es lo mismo que arriba, solo que hay que activar module
import headsets from "./data/Headsets.js"
import keyboards from "./data/Keyboards.js"
import monitors from "./data/Monitors.js"
import mouses from "./data/Mouses.js"




const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send("Anda re piola perro")
})

app.get('/api/auriculares', (req, res) => {
  res.json(headsets)
})

app.get('/api/auriculares/:id', (req, res) => {
  const id = req.params.id
  const product = headsets.find((product) => product.id === parseInt(id))
  res.json(product)
})

app.get('/api/teclados', (req, res) => {
  res.json(keyboards)
})

app.get('/api/teclados/:id', (req, res) => {
  const id = req.params.id
  const product = keyboards.find((product) => product.id === parseInt(id))
  res.json(product)
})

app.get('/api/monitores', (req, res) => {
  res.json(monitors)
})

app.get('/api/monitores/:id', (req, res) => {
  const id = req.params.id
  const product = monitors.find((product) => product.id === parseInt(id))
  res.json(product)
})

app.get('/api/mouses', (req, res) => {
  res.json(mouses)
})

app.get('/api/mouses/:id', (req, res) => {
  const id = req.params.id
  const product = mouses.find((product) => product.id === parseInt(id))
  res.json(product)
})

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// }) 
// lo mismo de abajo

app.listen(port, console.log(`Example app listening on port ${port}`))