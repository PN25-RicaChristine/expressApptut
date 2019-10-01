const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
app.use(cors())

app.get('/', (req, res) => {
	res.json({
		title:'Hello World',
		date: 'Today'
	})
})

app.post('/user', (req, res) => {
 	res.json({
		username:'Hailey Chickz',
		email: 'h@gm.com',
 		password:'jjjj'
 	})
 })
app.listen(port, () => console.log(`Example app listening on port ${port}!`))