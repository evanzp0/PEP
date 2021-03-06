define(function(require) {
	var registerSuite = require('intern!object');
	var w3cTest = require('../support/w3cTest');
	var name = 'pointerevent_pointerenter_does_not_bubble-manual';

	registerSuite({
		name: name,

		main: function() {
			return w3cTest(this.remote, name + '.html')
				.findById('target0')
					.moveMouseTo(50, 25)
					.end()
				.findById('parent0')
					.moveMouseTo(0, 25)
					.end()
				.checkResults();
		}
	});
});
