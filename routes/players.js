var express = require('express');
var router = express.Router();
const request = require('request');
var API_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjBlNmQxYjlhLTc2NWEtNGU3ZC04OTc4LWRkMThhZDI0MzNkYSIsImlhdCI6MTU4MzI3NjI4OCwic3ViIjoiZGV2ZWxvcGVyL2MxZjhiZjQyLWMzMjEtOWIxNS00YjE5LTQ5YjJkNDRlZGMxNyIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxOTAuMTgzLjEwMy4xNzUiXSwidHlwZSI6ImNsaWVudCJ9XX0.PdxfwmaCgtXKT0TRvE_NUbNWgQlpCeuKO_GpaNAGpne8JAkAs3QT1X0Vvb2p3PlmLHT341WCYTLgFf6L59viuQ';


/* GET users listing. */
router.get('/players', function(req, res) {
  res.send('respond with a resource: /players/search');
});





router.get('/getPlayer/:id', function(req, res){
	var id = req.params.id;

	options = {
		url: 'https://api.clashroyale.com/v1/players/%23' + id,
		/*url: 'https://api.clashroyale.com/v1/players/' + id,*/
		method: 'GET',
		headers: { // speciyfy the headers
			'authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjBlNmQxYjlhLTc2NWEtNGU3ZC04OTc4LWRkMThhZDI0MzNkYSIsImlhdCI6MTU4MzI3NjI4OCwic3ViIjoiZGV2ZWxvcGVyL2MxZjhiZjQyLWMzMjEtOWIxNS00YjE5LTQ5YjJkNDRlZGMxNyIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxOTAuMTgzLjEwMy4xNzUiXSwidHlwZSI6ImNsaWVudCJ9XX0.PdxfwmaCgtXKT0TRvE_NUbNWgQlpCeuKO_GpaNAGpne8JAkAs3QT1X0Vvb2p3PlmLHT341WCYTLgFf6L59viuQ'
		},
		body: 'Hello Hello! String body!'
	}



	console.log('parametro = #' + req.params.id);
	
 	request(options, function (error, response, body) {

		if (!error && response.statusCode === 200) {
			// Pintamos la respuesta JSON en navegador.
			res.send(body);
		}else{
			console.log(response.statusCode, body);
		}
	})
});


/* GET users listing. */
router.get('/getCurrentsCards', function(req, res) {
  res.send('respond with a resource: getCurrentsCards');
});

module.exports = router;
