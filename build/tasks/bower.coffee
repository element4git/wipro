module.exports = ->
	@loadNpmTasks 'grunt-bower-task'

	# Copy node_modules to the distribution folder during a build to ensure that
	# third-party resources are available.
	@config 'bower',
		install:
			options:
				'targetDir': './app/vendor'
				'layout': 'byComponent'
				'install': true
				'verbose': false
				'cleanTargetDir': true
				'cleanBowerDir': true
				'bowerOptions': {}