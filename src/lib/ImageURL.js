export default class ImageURL {

  constructor(imageComponent) {
    let image = imageComponent;
    if (window.screen.availWidth < 991 && image.mobile){
      this.url =  image.mobile.url;
      this.alt =  image.mobile.alt;
    } else {
      this.url = image.url;
      this.alt =  image.alt;
    }
  }

  getURL() {
    return this.url;
  }

  getAlt() {
    return this.alt;
  }
}
