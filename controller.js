(function() {
	function FormController(StoryService) {
		var vm = this;
		vm.wordInfo = {};
		vm.getValues = function(newInfo) {
			console.log(newInfo);
			StoryService.setWords(newInfo);
		};
	}
	function StoryController(StoryService) {
		var vm = this;
		vm.wordInfo = StoryService.getWords();
	}

	angular
		.module("storyApp")
		.controller("FormController", FormController)
		.controller("StoryController", StoryController)
})();