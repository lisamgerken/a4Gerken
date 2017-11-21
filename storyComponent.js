(function() {
	var storyComponent = {
		template: `
			<p>One fine day, my trusty {{ story.wordInfo.noun }} woke up to find a {{ story.wordInfo.adjective }} cat.  
			The cat was {{ story.wordInfo.verb }} {{ story.wordInfo.adverb }}. What a weird morning...</p>
			<button ng-click="">Restart Story</button>
		`,
		controller: "StoryController"
	}
	angular
		.module("storyApp")
		.component("storyComponent", storyComponent)
})();