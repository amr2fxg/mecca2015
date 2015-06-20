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
