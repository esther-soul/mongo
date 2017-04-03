module.exports=function exportUsers(models) {

	models.findAll = function findAll() {
		return models;
	};
	models.create = function create(user) {
			models.create({username: user.username, firstname: user.firstname, lastname: user.lastname, password: user.password });
			//model.username = user.username;
			//model.firstname= user.firstname;
			//model.lastname=user.lastname;
			model.save(function (err) {
 				if (err) return handleError(err);
	});
	
	function findOne(userId){
		for (var i=0; i<almacen.length; i++) {
			if (almacen[i].username === userId) {
				return almacen[i];
			}
		}
	}
	function remove(userId){
		for (var i=0; i<almacen.length; i++) {
			if (almacen[i].username === userId) {
				almacen.splice(i,1);
			}			
		}	
	}
	return models;
};


