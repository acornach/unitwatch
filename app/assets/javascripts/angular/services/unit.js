app.factory('Unit', ['$resource', function($resource) {
  function Unit() {
    this.service = $resource('/api/units/:unitId', {unitId: '@id'});
  };
  Unit.prototype.all = function() {
    return this.service.query();
  };
  Unit.prototype.delete = function(stId){
	this.service.remove({unitId: stId});
  };
  Unit.prototype.create = function(attr) {
    return this.service.save(attr);
  };
  
  
  return new Unit;
}]);