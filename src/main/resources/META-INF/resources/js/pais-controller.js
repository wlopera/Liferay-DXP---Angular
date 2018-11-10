angular.module('myApp', [])
  .controller('myController', ['$scope', function($scope){
 
	 $scope.paises = [
			{"nombre":"Argentina","capital":"Buenos Aires","moneda":"Peso","idioma":"Español"},
			{"nombre":"Brasil","capital":"Brasilia","moneda":"Cruzeiro Real","idioma":"Portugues"},
			{"nombre":"Colombia","capital":"Bogota","moneda":"Peso","idioma":"Español"},
			{"nombre":"Panamá","capital":"Panamá","moneda":"Balboa","idioma":"Español"},
			{"nombre":"Canadá","capital":"Otawa","moneda":"Dólar","idioma":"Inglés"},
			{"nombre":"Italia","capital":"Roma","moneda":"Lira","idioma":"Italiano"},
			{"nombre":"Japu00f3n","capital":"Tokio","moneda":"Yen","idioma":"Japonés"},
			{"nombre":"Venezuela","capital":"Caracas","moneda":"Bolívar","idioma":"Español"}
		];
  }]);