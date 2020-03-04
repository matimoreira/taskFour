var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/players', function(req, res) {
  res.send('respond with a resource: /players/search');
});


router.get('/getPlayer/:id', function(req, res){
	console.log(req.params.id);
	var id = req.params.id;
  	res.send('id ' + id);
});

/* GET users listing. */
router.get('/getCurrentsCards', function(req, res) {
  res.send('respond with a resource: getCurrentsCards');
});


/*router.param('user', function(req, res, next, id){
    console.log(req.user);
    console.log(id);
    next();
});
*/

module.exports = router;
