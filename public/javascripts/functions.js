$(function() {
	

	$('.dropdown-item').click(function () {

		$('#navbarDropdownMenuLink').data('cat', $(this).data('cat'));
		console.log($('#navbarDropdownMenuLink').data('cat'));
		console.log($(this).data('cat'));	
		$('#navbarDropdownMenuLink').text($(this).text());

	});

	$('#button--search').click(function () {
		var query = $('#input--search').val();
		console.log(query);
		var url = 'http://localhost:3000/getPlayer/' + query;
		var type = $('#navbarDropdownMenuLink').data('cat');
		$.ajax({
			url: url,
			type: 'GET',
			dataType: 'json'
		})
		.done(function(response) {
			response.currentDeck.forEach(function (element, index, array) {
				$('#tbody--query').append(`
				<tr>
					<td><img src='${element.iconUrls.medium}' height="75px"></td>
					<td>${element.name}</td>
					<td>${element.level}</td>
					<td>
						<a data-card=${element.id} class='btn btn-primary text-white button--view'>
							<i class='far fa-eye'></i>
						</a>
					</td>
				</tr>`)
				console.log(element.name);
			});
			console.log("success");
		})
		.fail(function(response) {
			console.log(response);
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