export default class VideoURL {

  constructor(imageComponent) {
    let image = imageComponent;
    if (window.screen.availWidth < 991){
      this.url =  "#";
    } else {
      this.url = image.url;
    }
  }

  getURL() {
    return this.url;
  }

}
