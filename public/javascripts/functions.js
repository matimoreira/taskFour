$(function() {
	

	$('.dropdown-item').click(function () {

		$('#navbarDropdownMenuLink').data('cat', $(this).data('cat'));
		console.log($('#navbarDropdownMenuLink').data('cat'));
		console.log($(this).data('cat'));	
		$('#navbarDropdownMenuLink').text($(this).text());

	});

	$('#span--search').click(function () {
		var query = $('#input--search').val();
		var type = $('#navbarDropdownMenuLink').data('cat');
		$.ajax({
			url: '/players',
			type: 'GET',
			dataType: 'json',
			headers:{
				query: query
			},
		})
		.done(function() {
			console.log("success");
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
	});


	function genius_get(url/*, query*/) {
		return $.ajax({
			url: 'https://api.clashroyale.com/v1/' + url,
			type: 'get',
			dataType: 'json',
			/*data:{
				q: query
			},*/
			headers:{
				'x-rapidapi-host': 'genius.p.rapidapi.com',
				'x-rapidapi-key': 'a6ec3401a8mshcb4faf17e6eb123p137240jsnbe2edb4cd9ad'
			},
			beforeSend: showLoadingImg
		})
		.always(function() {
			hideLoadingImg();
			console.log('esto se ejecuta siempre');
		})
		.fail(function() {
			console.log('esto se ejecuta cuando hubo un error');
			// handle request failures
		});

	}
	
});