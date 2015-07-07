$.getScript('js/vendor/bootstrap-select.min.js', function() {
	$('.selectpicker').selectpicker();

	$('#departamento').change(function() {
		$('#categoria').parent().parent().removeClass("hidden");
	});

	$('#categoria').change(function() {
		$('#subcategoria').parent().parent().removeClass("hidden");
	});

	$('#frete').change(function() {
	  if(this.value == "gratis") {
	  	$('#frete_gratis_regiao').parent().parent().removeClass("hidden");
	  } else {
	  	$('#frete_gratis_regiao').parent().parent().addClass("hidden");
	  }
	});
});

$.getScript('js/vendor/typeahead.bundle.js', function() {
	
	var marca = ['Adidas','Apple','Acer','Adobe','Armani','Avon'
	];

	// constructs the suggestion engine
	marca = new Bloodhound({
	  datumTokenizer: Bloodhound.tokenizers.whitespace,
	  queryTokenizer: Bloodhound.tokenizers.whitespace,
	  // `states` is an array of state names defined in "The Basics"
	  local: marca
	});
	 
	$('.typeahead').typeahead({
	  hint: true,
	  highlight: true,
	  minLength: 1
	},
	{
	  name: 'marca',
	  source: marca
	});
});

$.getScript('js/vendor/bootstrap-maxlength.min.js', function(){
	$('input#titulo, textarea#descricao').maxlength({
        alwaysShow: false,
        threshold: 15,
        warningClass: "label label-success",
        limitReachedClass: "label label-danger"
    });
});

$.getScript('js/vendor/bootstrap-tagsinput.min.js', function(){
	$('input#tags').tagsinput({
	  tagClass: 'big',
	  trimValue: true
	});
});

$.getScript('js/vendor/dropzone.js', function(){
	console.log('test');
});