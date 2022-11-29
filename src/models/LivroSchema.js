import mongoose from 'mongoose';

const livrosSchema = new mongoose.Schema(
  {
    id:{type:String},
    titulo:{type: String, require: true},
    autor:{type: mongoose.Schema.Types.ObjectId, ref: 'autores', require: true},
    editora:{type: String,  require: true},
    ano:{type: Number,  require: false},
    valor:{type: Number,  require: true}
  }
);

const livros= mongoose.model('Livros', livrosSchema);

export default livros;