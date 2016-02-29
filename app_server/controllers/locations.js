/* GET homepage */

module.exports.homeList = function(req, res){
	res.render('index', {title: 'Home'})
}

/* GET locations homepage */
module.exports.locationInfo = function(req, res){
	res.render('index', {title: 'Location info'})
}

/*GET Revies Page */

module.exports.addReview = function(req, res){
	res.render('index', {title: 'Add Review'})
}