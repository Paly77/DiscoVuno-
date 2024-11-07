const mongoose = require('mongoose');
//Modelado para cancion
const cancionSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  duracion: {
    type: Number,
    required: true
  }
});
//Modelado para album
const album = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
    trim: true
  },
  descripcion: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 200,
    trim: true
  },
  añoLanzamiento: {
    type: Number,
    required: true,
    min: 1
  },
  canciones: [cancionSchema],
  portada: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Album', album);