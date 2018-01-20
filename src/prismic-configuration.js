export default {

  apiEndpoint: 'https://rumamundi.prismic.io/api/v2',

  // -- Access token if the Master is not open
  accessToken: 'MC5XbHg4WGlrQUFGWkV3aktF.77-977-9VR5Cf--_ve-_ve-_ve-_vQkpQO-_ve-_vW7vv73vv71p77-9fgQsa--_vWxQLu-_vUQ577-9',

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
