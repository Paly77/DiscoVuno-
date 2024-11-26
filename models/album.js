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
  },
  youtubeLink: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^https:\/\/(www\.)?youtube\.com\/watch\?v=/.test(v);
      },
      message: props => `${props.value} no es un enlace válido de YouTube.`
    }
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