export default class YoutubeURL {

  getFormattedEmbedUrl(embedUrl, autoPlay) {
    let reg = /(youtu\.be\/|youtube\.com\/(watch\?(.*&)?v=|(embed|v)\/))([^\?&"'>]+)/ ;
    let thisArray = reg.exec(embedUrl);
    let interestedIndex = 5;

    if (interestedIndex >= 0) {
      if(autoPlay) {
        return "https://www.youtube.com/embed/" + thisArray[interestedIndex] + "?feature=oembed&autoplay=1";
      } else {
        return "https://www.youtube.com/embed/" + thisArray[interestedIndex] + "?feature=oembed";
      }
    } else {
      return "";
    }
  }
}
