module.exports=function exportUsers(mongoose) {
	
	var Schema = mongoose.Schema,
		ObjectId=Schema.ObjectId;

	var modelsSchema= new Schema ({
		username: String, 
		firstname: String,
		lastname: String,
		password: String
	});

	var models = mongoose.model('models', modelsSchema);

	function findAll() {
		return models;
	};
	function create(user) {
		var model = new models({
			username: user.username,
			firstname: user.firstname,
			lastname: user.lastname,
			password: password.lastname
		});
	};
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


