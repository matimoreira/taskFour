$(function() {
	

	$('.dropdown-item').click(function () {

		$('#navbarDropdownMenuLink').data('cat', $(this).data('cat'));
		console.log($('#navbarDropdownMenuLink').data('cat'));
		console.log($(this).data('cat'));	
		$('#navbarDropdownMenuLink').text($(this).text());

	});

	$('#button--search').click(function () {
		var query = $('#input--search').val();
		var type = $('#navbarDropdownMenuLink').data('cat');


		switch (type) {
  			case 0:
  				getPlayersByTag(query);
  				break;
  			case 1:
  				break;
  			case 2:
  				break;
  			default:
  				getPlayersByTag(query);
  				break;
		}
	});




	function getPlayersByTag(tag) {

		var url = 'http://localhost:3000/getPlayer/' + tag;

		$.ajax({
			url: url,
			type: 'GET',
			dataType: 'json',
			beforeSend: showLoadingImg
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
			hideLoadingImg();
			console.log("complete");
		});
	}


	function showLoadingImg(){
		$('#div--spinner').removeClass('d-none');
		console.log('showLoadingImg');
	}

	function hideLoadingImg() {
		$('#div--spinner').addClass('d-none');
		console.log('hideLoadingImg');
	}
	
});