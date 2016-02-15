angular.module('translatorServices', [])

.factory('wordsFactory', [function(){
	function getRegions = [
		 'Paulistanês - SP',
		 'Cearencês - CE'
	]

	return {
		getRegions : getRegions
	}
}])