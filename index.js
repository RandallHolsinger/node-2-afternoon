const express = require('express');
const app = express();
const massive = require('massive');
require('dotenv').config()
const ctrl = require('./products_controller');

app.use(express.json());
const {CONNECTION_STRING, SERVER_PORT} = process.env


massive(CONNECTION_STRING).then((dbInstance) =>{
    app.set('db', dbInstance)
}).catch((err) => {
   console.log('You have an ERROR') 
})

app.post(`/api/products`, ctrl.create);

app.get(`/api/products`, ctrl.getAll);

app.get(`/api/products/:id`, ctrl.getOne);

app.put(`/api/products/:id`, ctrl.update);

app.delete(`/api/products/:id`, ctrl.delete);




app.listen(SERVER_PORT, ()=> console.log(`Making 💰 Money 💰 on PORT: ${SERVER_PORT}!`))