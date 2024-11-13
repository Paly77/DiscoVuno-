const mongoose = require('mongoose');
const Album = require('./album');

const user = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    minlength: 2
  },
  apellido: {
    type: String,
    required: true,
    minlength: 2
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  },
  password: {
    type: String,
    required: true
  },
   favoritos:[ {
    //id:{type:mongoose.Schema.Types.ObjectId}, //es un id de otra coleccion
              titulo:{type: String },
  }]
});


module.exports = mongoose.model('User', user);