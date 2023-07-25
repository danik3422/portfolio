const mongoose = require('mongoose')

const portfolioSchema = new mongoose.Schema({
	_id: { type: mongoose.Schema.ObjectId },
	title: { type: String },
	skills: { type: Array },
	gitHubLink: { type: String },
	webSiteLink: { type: String },
	img: { type: String },
	gradient: { type: String },
})

module.exports = mongoose.model('projects', portfolioSchema)
