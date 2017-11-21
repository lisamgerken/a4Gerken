(function() {
	var formComponent = {
		template: `
			<input ng-model="form.info.noun" placeholder="noun">
			<input ng-model="form.info.adjective" placeholder="adjective">
			<input ng-model="form.info.verb" placeholder="verb">
			<input ng-model="form.info.adverb" placeholder="adverb">
			<button ng-click="form.getValues(form.info);">Read Story</button>
		`,
		controller: "FormController"
	}
	angular
		.module("storyApp")
		.component("formComponent", formComponent)
})();