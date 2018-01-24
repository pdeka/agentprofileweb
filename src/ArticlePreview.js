import React from 'react';
import classNames from 'classnames';

export default class ArticlePreview extends React.Component {
  state = {
    doc: null
  }

  getFormattedEmbedUrl(embedUrl) {
    let thisArray = embedUrl.split('?v=');
    let interestedIndex = thisArray.length - 1;
    if (interestedIndex >= 0) {
      return "https://www.youtube.com/embed/" + thisArray[interestedIndex] + "?feature=oembed";
    } else {
      return "";
    }
  }

  displayImageOrVideo(data) {
    if (data.youtube_link && data.youtube_link.url && data.youtube_link !== {}) {
      return <div className={classNames('card-header', 'card-header-image', 'card-raised')}>
        <div>
          <div className={classNames('embed-responsive', 'embed-responsive-16by9')}>
            <iframe title="video ruma mundi stanhope garden sydney" id={'iframe-rounded-corner'} src={this.getFormattedEmbedUrl(data.youtube_link.url)} frameBorder="0" gesture="media" allow="encrypted-media" allowFullScreen="true"></iframe>"
          </div>
        </div>
      </div>;
    } else if (data.top_level_image && data.top_level_image.url && data.top_level_image !== {}) {
      return <div className={classNames('card-header', 'card-header-image')}>
        <img className={'img'} src={data.top_level_image.url} alt="article ruma mundi stanhope garden sydney"/>
      </div>;
    } else {
      return <div className={classNames('card-header', 'card-header-image')}>
        Can you please go to the Content Management System and enter an image or a video?
      </div>;
    }

  }

  render() {
    return this.displayImageOrVideo(this.props.data);
  }
}
