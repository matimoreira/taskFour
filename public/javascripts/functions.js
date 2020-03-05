$(function() {
	

	$('.dropdown-item').click(function () {
		var cat = $(this).data('cat');
		$('#navbarDropdownMenuLink').data('cat', cat);
		console.log($('#navbarDropdownMenuLink').data('cat'));
		console.log($(this).data('cat'));	
		$('#navbarDropdownMenuLink').text($(this).text());
		if (cat == 2) {
			getAllLocations();
		}

	});

	$('#button--search').click(function () {
		var query = $('#input--search').val();
		var type = $('#navbarDropdownMenuLink').data('cat');


		switch (type) {
  			case 0:
  				getPlayersByTag(query);
  				break;
  			case 1:
  				getClanByTag(query);
  				break;
  			case 2:
  				break;
  			default:
  				getPlayersByTag(query);
  				break;
		}
	});




	function getPlayersByTag(tag) {
		$('#div--clanPlayers').addClass('d-none')
		var url = 'http://localhost:3000/getPlayer/' + tag;

		$.ajax({
			url: url,
			type: 'GET',
			dataType: 'json',
			beforeSend: showLoadingImg
		})
		.done(function(response) {
			$('#div--cardsPlayer').removeClass('d-none');
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


	function getClanByTag(tag){
		var url = 'http://localhost:3000/getClan/' + tag;
		$('#div--cardsPlayer').addClass('d-none');

		$.ajax({
			url: url,
			type: 'GET',
			dataType: 'json',
			beforeSend: showLoadingImg
		})
		.done(function(response) {
			console.log(response);
			$('#div--clanPlayers').removeClass('d-none')
			response.items.forEach(function (element, index, array) {
				$('#tbody--queryClans').append(`
				<tr>
					<td>${element.name}</td>
					<td>${element.trophies}</td>
					<td>${element.arena.name}</td>
					<td>${element.role}</td>
					<td>${element.donations}</td>
					<td>
						<a data-card=${element.tag} class='btn btn-primary text-white button--view'>
							<i class='far fa-eye'></i>
						</a>
					</td>
				</tr>`);
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


	function getAllLocations() {
		var url = 'http://localhost:3000/getAllLocations';
		$('#div--cardsPlayer').addClass('d-none');
		$('#div--clanPlayers').addClass('d-none')


		$.ajax({
			url: url,
			type: 'GET',
			dataType: 'json',
			beforeSend: showLoadingImg
		})
		.done(function(response) {
			console.log(response);
			$('#div--Locations').removeClass('d-none')
			response.items.forEach(function (element, index, array) {
				$('#tbody--queryLocations').append(`
				<tr>
					<td>${element.name}</td>
					<td>
						<a data-card=${element.id} class='btn btn-primary text-white button--view'>
							<i class='far fa-eye'></i>
						</a>
					</td>
				</tr>`);
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