//AofRvfa26dMNY6kx contraseña de mongo
//mongodb+srv://pauloretor77:QzVmISxFxwYwHtpB@mongo.wgxuw.mongodb.net/?retryWrites=true&w=majority&appName=Mongo
//Llama a Express
const express = require("express")
const mongoose = require("mongoose")
const router = require('./routes/index')
const albums = require('./models/album.js')
const users = require('./models/user.js')

const url = 'mongodb+srv://pauloretor77:QzVmISxFxwYwHtpB@mongo.wgxuw.mongodb.net/?retryWrites=true&w=majority&appName=Mongo'
//Llama a Express'

//Generamos una instancia de express y lo guardamos
const app=express()
app.use(express.json())//para parsear los datos
app.use('/',router)

//Funcion para conectar a mongoose
const connectToMongo = async()=>{
    try{
        await mongoose.connect(url)
        //Funcion para levantar nuestro servidor
        app.listen(3000,()=>{
            console.log('Servidor escuchando en el puerto 3000 y DB conectada')
        })

    }catch(error){
        console.log(error)
    }
} 

connectToMongo()


