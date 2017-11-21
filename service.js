(function() {
	function StoryService($http) {
		var wordInfo = {};
		return {
			setWords: setWords,
			getWords: getWords
		};

		function setWords(newInfo) {
			wordInfo = newInfo;
		}

		function getWords() {
			return wordInfo;
			console.log(wordInfo);
		}

	}
	angular
		.module("storyApp")
		.factory("StoryService", StoryService)
})();