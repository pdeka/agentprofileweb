export default class ArticlePreview {

  getFormattedEmbedUrl(embedUrl) {
    let reg = /(youtu\.be\/|youtube\.com\/(watch\?(.*&)?v=|(embed|v)\/))([^\?&"'>]+)/ ;
    let thisArray = reg.exec(embedUrl);
    let interestedIndex = 5;
    if (interestedIndex >= 0) {
      return "https://www.youtube.com/embed/" + thisArray[interestedIndex] + "?feature=oembed";
    } else {
      return "";
    }
  }
}
