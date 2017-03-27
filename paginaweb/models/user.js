module.exports=function exportUsers() {
	var model={};
	var almacen=[];
	model.findAll=function findAll() {
		return almacen;
	};
	model.create=function create(user) {
		almacen.push(user);
		return user;
	};
	model.findOne=function findOne(userId){
		for (var i=0; i<almacen.length; i++) {
			if (almacen[i].username === userId) {
				return almacen[i];
			}
		}
	}
	model.remove=function remove(userId){
		for (var i=0; i<almacen.length; i++) {
			if (almacen[i].username === userId) {
				almacen.splice(i,1);
			}			
		}	
	}
	return model;
};


