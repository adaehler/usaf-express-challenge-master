const express = require('express')
const app = express()
const users = require('./users.json')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send(users))

app.get('/users/:id', (req, res) => {
    /* GET a user by their id */
    return res.send(users.filter(item => { if(item.id === parseInt(req.params.id)){

        return item.profilePic
        
    }})
)})

// app.post('/:users', (req, res) => {
//     /* POST user data using the request body */
//     users.push(req.body);
//     res.send(req.body)
// })

app.get('/:users', (req, res) => {
    /* GET a user by their name */
    return res.send(users.filter(person => { if((person.name[0] === req.query.name.split(" ")[0]) 
    || (person.name[1] === req.query.name.split(" ")[0])){
        
        return person.name
        
    }})
)})

const port = 3000 
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))