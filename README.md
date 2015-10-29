
## Updating dependencies ##

Third party packages may update independently from this main repo, so it's a
good idea to update after fetching.

``` bash
npm install
```

``` bash
bower install
```
## Build process ##

The build process consists of numerous Grunt plugin tasks that work together
to optimize your application.

``` bash
#set apache:

# Remove the trailing slash from routes
DirectorySlash Off

# Enable the RewriteEngine
RewriteEngine on

# Map resources to development
RewriteRule ^test/(.*)$ test/$1 [NC,L]
RewriteRule ^app/(.*)$ app/$1 [NC,L]
RewriteRule ^vendor/(.*)$ vendor/$1 [NC,L]

# These conditions ensure that the file does not exist and that the current
# request URI is not the index.
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_URI} !index

# Redirect remaining requests to the index.html file
RewriteRule (.*) index.html [NC,L]

```
``` bash
# To run the build process, run the NPM start script. This will automatically
# run JSHint, the development Connect server, and watch your files for changes.
npm start

# Run a build and test the now optimized assets.
npm run test-prod
```

## Working with tests ##

Ceate an ES6 module in the `test/tests` directory and add an
import in the `test/runner.js` file. You'll see existing examples in there to
make it easy to follow.

Run the tests with:

``` bash
npm test
```

If you want to continuously test, run `npm start` and open the
`test/index.html` file in your browser. The tests will re-run whenever you
change source files.

By default, the test runner is BDD Mocha and uses Node's assert.

## License ##
Copyright © 2015 Tim Branyen (@tbranyen)  
Licensed under the MIT license.

[travis-url]: http://travis-ci.org/tbranyen/backbone-boilerplate
[travis-image]: https://img.shields.io/travis/tbranyen/backbone-boilerplate.svg
[coveralls-url]: https://coveralls.io/r/backbone-boilerplate/backbone-boilerplate
[coveralls-image]: https://img.shields.io/coveralls/backbone-boilerplate/backbone-boilerplate.svg
[gitter-url]: https://gitter.im/backbone-boilerplate/backbone-boilerplate
[gitter-image]: https://img.shields.io/badge/GITTER-join%20chat-green.svg
