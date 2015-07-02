
var mongoose = require('mongoose');

var anunciosSchema = new mongoose.Schema({

	cleanurl: String,
	data: { type: Date, default: Date.now },
	estado: String,
	quant: Number,
	subtitulo: String,
	titulo: String,
	valor: Number,
	vencimento: Date,
	patrocinado: Boolean,
	score: Number

},{collection: 'anuncios'})


module.exports.mAnuncios = mongoose.model('anuncios', anunciosSchema);
