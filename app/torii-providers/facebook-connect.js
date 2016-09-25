import FacebookConnectProvider from 'torii/providers/facebook-connect';

export default FacebookConnectProvider.extend({
  fetch(data) {
    return data;
  }
});
