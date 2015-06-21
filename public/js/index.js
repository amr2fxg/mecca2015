<script type="text/javascript">
/*  
* Habilitar essa opção e iniciar controle de versão dos aquivos .js .css quando entrar em produção (caching p/ performance!) 
*
$.ajaxSetup({
cache: true
});  
*
*/

	//document ready only scripts
	$(document).ready(function() {

	$.getScript("/js/utils/search.js");

	}); //document.ready
</script>
=======
$.getScript("js/utils/search.js");
