/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'facebook-page-unliker',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV['ember-simple-auth'] = {
    routeIfAlreadyAuthenticated: 'likes',
    routeAfterAuthentication: 'likes'
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV['torii'] = {
      providers: {
        'facebook-connect': {
          appId: '456648777817294',
          scope: 'user_likes',
          xfbml: false
        }
      }
    }
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV['torii'] = {
      providers: {
        'facebook-connect': {
          appId: '434327266716112',
          scope: 'user_likes',
          xfbml: false
        }
      }
    }
  }

  return ENV;
};
