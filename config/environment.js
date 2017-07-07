/* eslint-env node */

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
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    torii: {
      providers: {
        'facebook-connect': {
          version: 'v2.8',
          appId: '456648777817294',
          scope: 'user_likes,email'
        } 
      } 
    }
  };

  ENV['segment'] = {
    WRITE_KEY: 'CuAMeBX6nQv14wq8fyYTqrCjmInkmy7C',
    LOG_EVENT_TRACKING: true
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
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
          version: 'v2.8',
          appId: '434327266716112',
          scope: 'user_likes,email',
        }
      }
    }
  }

  return ENV;
};
