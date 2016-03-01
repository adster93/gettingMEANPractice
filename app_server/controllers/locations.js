/* GET homepage */

module.exports.homeList = function(req, res){
	res.render('locations-list', {title: 'Home'})
}

/* GET locations homepage */
module.exports.locationInfo = function(req, res){
	res.render('location-info', {title: 'Location info'})
}

/*GET Revies Page */

module.exports.addReview = function(req, res){
	res.render('location-review-form', {title: 'Add Review'})
}