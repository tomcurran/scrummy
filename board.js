angular.module('boardApp', ['boardApp.config', 'boardApp.projects'])
  .controller('BoardController', function($scope, $http, config, projects) {

	var currentProject = projects[config.currentProject];

	var parseSections = function(json, project) {
		var stories = json[0].stories;

		// remove unwanted stories
		stories = stories.filter(function(story) {
			return story.story_type != 'release';
		});

		// add estimation range property
		stories.forEach(function(story) {
			story.estimate_range = project.getEstimateRange(story.estimate);
		});

		// create sections with appropriate stories
		return project.sections.map(function(section) {
			return {
				name: section.name,
				stories: stories.filter(function(story) {
					return section.storyTypes.indexOf(story.current_state) > -1;
				})
			};
		});
	};

	$http({
		method: 'GET',
		url: 'https://www.pivotaltracker.com/services/v5/projects/' + currentProject.pivotalProjectId + '/iterations?scope=current',
		headers: {
			'X-TrackerToken': config.pivotalApiToken
		}
	}).success(function(data, status, headers, config) {
		if (status == 200) {
			$scope.sections = parseSections(data, currentProject);
		}
	}).error(function(data, status, headers, config) {
		console.log('json error');
	});

});
