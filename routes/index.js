const express = require('express')
const router = express.Router()//una instancia para manejar rutas
const User= require('../models/user.js')
const Album= require('../models/album.js')

router.get("/",(req,res)=>{
    res.status(200).send("Hola Mundo")
})

//Ruta para crear un usuario
router.post("/user", async (req, res) => {
    try {
       const user = new User(req.body);
       await user.save();
      res.status(201).send(user);
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
  });

//Ruta que reciba un id por params y retorne la data del usuario nuevamente, excluyendo la contraseña.
// Ruta para consultar un usuario por ID
router.get("/user/:id", async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).send("Usuario no encontrado.");
      }
  
      // Eliminar la contraseña antes de enviar la respuesta
      user.contraseña = undefined;
      res.status(200).send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
//Ruta para editar los datos de un usuario.
router.put("/user/:id", async (req, res) => {
    try {
        const id= req.params.id
        const newInfo= req.body
        await User.findByIdAndUpdate(id,newInfo,{new:true})
        res.status(201).send(user);
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
  });

  //Ruta para agregar un album
  router.post("/album", async (req, res) => {
    try {
      const album = new Album(req.body);
      await album.save();
      res.status(201).send(album);
    } catch (error) {
      console.log('Error al agregar álbum:', error);
      res.status(400).send(error);
    }
  });

  //Ruta para editar un album
  router.put("/album/:id", async (req, res) => {
    try {
        const id= req.params.id
        const newInfo= req.body
        await Album.findByIdAndUpdate(id,newInfo,{new:true})
        res.status(201).send(user);
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
  });

  //Una ruta para agregar una canción del album.
  router.post("/album/:id", async (req, res) => {
    try {
       const user = new Album(req.body);
       await user.save();
      res.status(201).send(user);
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
  });
  //Ruta para eliminar una cancion del album
  router.delete("/album/:id", async (req, res) => {
    try {
       const user = new Album(req.body);
       await user.save();
      res.status(201).send(user);
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
  });

  //Ruta que devuelva todos los albums.
  router.get("/album", async (req, res) => {
    try {
      const album = await Album.find(); // Recupera todos los álbumes de la base de datos
      res.status(200).send(album);
    } catch (error) {
      console.log("Error al obtener álbumes:", error);
      res.status(500).send(error);
    }
  });

  //Ruta que devuelva la información de un album especifíco.
  router.get("/album/:id", async (req, res) => {
    try {
      const user = await Album.findById(req.params.id);
      res.status(200).send(user);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  //Ruta para eliminar un album
  router.delete("album/:id",async(req,res) =>{
    try {
        const id = req.params.id
        await Album.findByIdAndDelete(id)
        res.status(200).send(album)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
  })
  




module.exports=router 