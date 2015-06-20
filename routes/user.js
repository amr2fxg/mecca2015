
var url = require('url'),
	qs = require('querystring'),
	mongoose = require('mongoose'),
	tools = require('../lib/tools'),
	hash = require('../lib/pass').hash;

	require('../models/usuarios');


exports.login = function(req, res){
	res.render('login');
};

exports.new = function(req, res){
	res.render('cadastro');
};

exports.recSenha = function(req, res){
	res.render('recSenha');
};


exports.logout = function(req, res){
	delete req.session.user;
	res.send('', 200);
};

exports.validate = function (req, res) {
	
	var mUsuarios = mongoose.model('usuarios'),
		email = req.body.palavra;

   	mUsuarios.findOne({email: email}, {email:1}, function(err, results) {

		if (err || results) {
		
			res.send('Usado', 200);
		
		}else{

			res.send('OK', 200);
		}
	});
};

exports.create = function(req, res){

	var mUsuarios = mongoose.model('usuarios'),
		cadastro = req.body.dados;

	console.log('criando: ' + cadastro.nome);

	u = new 	mUsuarios;
	u.cpf = 	cadastro.cpf;
	u.nome=		cadastro.nome;
	u.sobrenome=cadastro.sobrenome;
	u.email=	cadastro.email;
	u.cep=		cadastro.cep;
	
	hash(cadastro.pwd, function(err, salt, hash){
	
	  	if (err) throw err;
			
		// store the salt & hash in the "db"
		u.salt = salt;
		u.hash = hash;

		u.save(function(err){

			if (!err) { 

				// Regenerate session when signing in
				// to prevent fixation
				req.session.regenerate(function(){

					// Store the user's primary key
					// in the session store to be retrieved,
					// or in this case the entire user object
					req.session.user = cadastro.email;
					res.send('success', 200);
				});

			}else{ 
				throw err;
			}

		});

	});
};	



exports.auth = function(req, res){

	var mUsuarios = mongoose.model('usuarios'),
		user = req.body.login_user,
		pwd = req.body.login_senha;

	console.log('Autenticando: ' + user + ' senha:' + pwd);

   	mUsuarios.findOne({email: user}, {email:1, hash:1, salt:1}, function(err, results) {

		if (err) {

			console.log('Search Error');
			res.send('userNotFound', 200);
		}

		if(!results){

			res.send('userNotFound', 200);
			return false;

		}else {


			// apply the same algorithm to the POSTed password, applying
			// the hash against the pass / salt, if there is a match we
			// found the user
			hash(pwd, results.salt, function(err, hash){
			
				if (err) {
			
					console.log('Hash (crypto) func error! ' + err);
					res.send('', 200);
				}


				if (hash == results.hash) {

					// Regenerate session when signing in
					// to prevent fixation
					req.session.regenerate(function(){

						// Store the user's primary key
						// in the session store to be retrieved,
						// or in this case the entire user object
						req.session.user = user;
						res.send('loginOk', 200);
					});

				}else{

					res.send('incorrectPwd', 200);
				}

			});


	    }
   	});



};
