const { MongoClient } = require('mongodb')
require('dotenv').config()

const mongoClient = new MongoClient(process.env.MONGODB_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
})

exports.handler = async (req, res) => {
	try {
		await mongoClient.connect()
		const database = mongoClient.db(process.env.MONGODB_DATABASE)
		const collection = database.collection(process.env.MONGODB_COLLECTION)
		const result = await collection.find({}).toArray()
		return {
			statusCode: 200,
			body: JSON.stringify(result),
		}
	} catch (error) {
		return {
			statusCode: 500,
			body: error.toString(),
		}
	}
}
