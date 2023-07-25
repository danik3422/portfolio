const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Projects = require('./models/Projects')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => {
		console.log('DB Connected successfully!')
	})
	.catch((err) => {
		console.log(err)
	})

app.get('/projects', (req, res) => {
	Projects.find()
		.then((projects) => res.json(projects))
		.catch((err) => res.json(err))
})

app.listen(3001, () => {
	console.log('Server start successfully!')
})
