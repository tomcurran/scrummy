angular.module('boardApp.projects', [])
  .constant('projects', {
	// story types: accepted, delivered, finished, started, rejected, planned, unstarted, unscheduled
	'nimbus-app': {
		pivotalProjectId: 1350748,
		sections: [
			{ name: 'Backlog', storyTypes: ['rejected', 'planned', 'unstarted', 'unscheduled'] },
			{ name: 'In Progress', storyTypes: ['started'] },
			{ name: 'Ready for Test', storyTypes: ['delivered', 'finished'] },
			{ name: 'Done', storyTypes: ['accepted'] }
		],
		getEstimateRange: function(estimate) {
			if (estimate > 8) {
				return 'large';
			} else if (estimate > 3) {
				return 'medium';
			} else if (estimate >= 0) {
				return 'small';
			} else {
				return 'none';
			}
		}
	},
	'projectr': {
		pivotalProjectId: 1474072,
		sections: [
			{ name: 'Backlog', storyTypes: ['rejected', 'planned', 'unstarted', 'unscheduled'] },
			{ name: 'In Progress', storyTypes: ['started'] },
			{ name: 'Ready for Test', storyTypes: ['delivered', 'finished'] },
			{ name: 'Done', storyTypes: ['accepted'] }
		],
		getEstimateRange: function(estimate) {
			if (estimate > 5) {
				return 'large';
			} else if (estimate > 2) {
				return 'medium';
			} else if (estimate >= 0) {
				return 'small';
			} else {
				return 'none';
			}
		}
	}
});
