module.exports = ->
	@loadNpmTasks 'grunt-contrib-compass'

	# Copy node_modules to the distribution folder during a build to ensure that
	# third-party resources are available.
	@config 'compass',
		dev:
			options:
				'sassDir': './app/sass'
				'cssDir': './app/styles'