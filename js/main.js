$("#seleccionar").change(function() {
	$(".pelicula").show();
	$(".pelicula").not("."+$("#seleccionar").val()).hide(1200)
});