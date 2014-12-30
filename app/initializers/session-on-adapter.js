export function initialize(container, application) {
  // application.inject('route', 'foo', 'service:foo');

  // Inject session into the adapter object so we can pass the session access tokens into our requests by default.
  application.inject('adapter', 'session', 'simple-auth-session:main');
}

export default {
  name: 'session-on-adapter',
  after: 'simple-auth', // Custom injection of session into the adapter to permit the tkoen to be addeed into every response, you feel me?
  initialize: initialize
};
