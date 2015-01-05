/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var env = process.env.EMBER_ENV;

// If the environment is anything other than development we will need to prepend the host
// and add a cache busting fingerprint to all of the assets
var bucketEnv = 'S3_BUCKET_' + env.toUpperCase();
var asset_bucket = process.env[bucketEnv] || '** WARNING: environment variable not set for ' + bucketEnv + ' **';

var app = new EmberApp({
  fingerprint: {
    enabled: env !== 'development', 
    prepend:  asset_bucket,
    exclude: ['incl'],
    extensions: ['js', 'css', 'jpg', 'png', 'gif']
  },
  minifyCSS: {
    enabled: true,
    options: {}
  }
});

if (env === 'development') {
  // Push any development only dependencies to the trees array
}

module.exports = app.toTree();
