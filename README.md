# Hopper-frontend

[![Build Status](https://travis-ci.org/PicturePipe/hopper-frontend.svg)](https://travis-ci.org/PicturePipe/hopper-frontend)
[![codecov.io](https://img.shields.io/codecov/c/github/PicturePipe/hopper-frontend.svg?branch=develop)](http://codecov.io/github/PicturePipe/hopper-frontend?branch=develop)
[![Dependencies](https://david-dm.org/PicturePipe/hopper-frontend.svg)](https://david-dm.org/PicturePipe/hopper-frontend)
[![DevDependencies](https://david-dm.org/PicturePipe/hopper-frontend/dev-status.svg)](https://david-dm.org/PicturePipe/hopper-frontend#info=devDependencies)



Hopper-frontend is a JavaScript frontend for the Hopper API. It allows
your users to easily create there own formulars.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [nvm](https://github.com/creationix/nvm)

## Installation

To install it, just run the following commands:

* `git clone <repository-url>` this repository
* change into the new directory
* `nvm install`
* `npm install`
* `npm run bower -- install`

Use `nvm deactivate` after you are done to restore your `PATH` variable. With `nvm use` you can set it again to run, test or develop the project.

## Running / Development

Just type the following to run hopper-frontend:

* `ember server`
* visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests  / Coverage Report

To run the test suite use the following command.

* `npm test`

You also can view the tests in the browser of your choice. There you also can see the coverage:

* `ember server`
* visit your tests at [http://localhost:4200/tests](http://localhost:4200/tests).
* click the `Enable Coverage` checkbox.

### Generating Documentation

You can use `ember-cli-yuidoc` to generate the documentation in the `docs/` directory:

* `ember ember-cli-yuidoc`

You can also automatically generate, update and serve it at [http://localhost:4200/docs/](http://localhost:4200/docs/):

* `ember serve --docs`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

