export default {

  apiEndpoint: 'https://kenekt.prismic.io/api/v2',

  // -- Access token if the Master is not open
  accessToken: 'MC5XbmpfMlNZQUFDZ0Fnem1G.Qe-_vT3vv73vv73vv73vv70z77-9Su-_ve-_ve-_vTXvv73vv73vv73vv73vv73vv73vv70WE--_ve-_ve-_vUDvv73vv70S77-9Rw',

  // OAuth
  // clientId: 'xxxxxx',
  // clientSecret: 'xxxxxx',

  // -- Links resolution rules
  // This function will be used to generate links to Prismic.io documents
  // As your project grows, you should update this function according to your routes
  linkResolver(doc, ctx) {
    return '/';
  },
  homepage_uid: 'homepage_ruma_mundi',
  contactuspage_uid: 'contactuspage_ruma_mundi'
};
