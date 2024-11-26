const express = require('express');
const router = express.Router();//una instancia para manejar rutas
const User= require('../models/user.js');
const Album= require('../models/album.js');

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

// Ruta para actualizar los favoritos de un usuario
router.put("/user/:id/favoritos", async (req, res) => {
  try {
    const { id } = req.params;
    const { favoritos } = req.body;

    // Verifica si el usuario existe y actualiza sus favoritos
    const user = await User.findByIdAndUpdate(
      id,
      { favoritos: favoritos }, // Actualiza los favoritos
      { new: true } // Devuelve el usuario actualizado
    );

    if (!user) {
      return res.status(404).send("Usuario no encontrado.");
    }

    res.status(200).send(user);
  } catch (error) {
    console.log("Error al actualizar favoritos:", error);
    res.status(500).send(error);
  }
});

//Ruta que devuelva todos los usuarios.
router.get("/user", async (req, res) => {
  try {
    const user = await User.find(); // Recupera todos los usuarios de la base de datos
    res.status(200).send(user);
  } catch (error) {
    console.log("Error al obtener usuarios:", error);
    res.status(500).send(error);
  }
});

//*************************ALBUM**************************
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

// Ruta para agregar una canción a un álbum
router.post('/album/:albumId/canciones', async (req, res) => {
try {
    const { albumId } = req.params;
    const nuevaCancion = req.body; // La nueva canción que se va a agregar

    // Encuentra el álbum y agrega la nueva canción al arreglo de canciones
    const album = await Album.findByIdAndUpdate(
      albumId,
      { $push: { canciones: nuevaCancion } },
      { new: true } // Para devolver el álbum actualizado
    );

    if (!album) {
      return res.status(404).send("Álbum no encontrado.");
    }

    res.status(201).send(album);
  } catch (error) {
    console.log('Error al agregar canción:', error);
    res.status(500).send(error);
  }
});

  
  // Ruta para eliminar una canción específica en un álbum
  router.delete('/album/:albumId/canciones/:cancionId', async (req, res) => {
    try {
       const { albumId, cancionId } = req.params;

       // Encuentra el álbum y elimina la canción específica
       const album = await Album.findByIdAndUpdate(albumId,{ $pull: { canciones: { _id: cancionId } } },
         { new: true } );

       if (!album) {
        return res.status(404).send("Álbum o canción no encontrados.");
       }

       res.status(200).send(album);
     } catch (error) {
        console.log('Error al eliminar la canción:', error);
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
      res.status(200).send(album);
    } catch (error) {
      res.status(500).send(error);
    }
  });

  //Ruta para eliminar un album
  router.delete("/album/:id",async(req,res) =>{
    try {
        const id = req.params.id
        await Album.findByIdAndDelete(id)
        res.status(200).send(album)
    } catch (error) {
        console.log(error)
        res.status(500).send(error)
    }
  })

 

module.exports=router; 