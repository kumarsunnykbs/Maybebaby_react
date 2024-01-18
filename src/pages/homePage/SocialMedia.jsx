/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-unresolved, import/extensions, import/no-extraneous-dependencies */
import React, { Component, useEffect, useState } from 'react';
import OUtline from "../../asset/image/OUTLINE_copy_2.svg"
import Group from  "../../asset/image/Group.svg";
import Outline2 from  "../../asset/image/Whatsapp.svg";
import {
    EmailShareButton,
    FacebookShareButton,
    HatenaShareButton,
    InstapaperShareButton,
    LineShareButton,
    LinkedinShareButton,
    LivejournalShareButton,
    MailruShareButton,
    OKShareButton,
    PinterestShareButton,
    PocketShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton,
    EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    HatenaIcon,
    InstapaperIcon,
    LineIcon,
    LinkedinIcon,
    LivejournalIcon,
    MailruIcon,
    OKIcon,
    PinterestIcon,
    PocketIcon,
    RedditIcon,
    TelegramIcon,
    TumblrIcon,
    TwitterIcon,
    ViberIcon,
    VKIcon,
    WeiboIcon,
    WhatsappIcon,
    WorkplaceIcon,
    FacebookShareCount,
    FacebookMessengerShareButton
  } from "react-share";


//   15f7e5c2bcb9408776c968fb42df533b

const SocialMedia = ({src}) => {
    const [shareUrl, setShareUrl] = useState('https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI');
    // const shareUrl = 'https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI';
    const title = '';
    useEffect(() => {
        setShareUrl(src)
    }, [src])
    return (
        <div className="Demo__container mr-1" style={{ display: 'flex' }}>
        <div className="Demo__some-network">
            <FacebookShareButton
            url={shareUrl}
            quote={title}
            className="Demo__some-network__share-button"
            fill="#D29191"
            >
            {/* <FacebookIcon  fill='#D29191' size={32} round /> */}
            <img src={OUtline } height={50} width={50} />
            </FacebookShareButton>

            <div>
            <FacebookShareCount url={shareUrl} className="Demo__some-network__share-count">
                {count => count}
            </FacebookShareCount>
            </div>
        </div>

        <div className="Demo__some-network">
          <WhatsappShareButton
            url={shareUrl}
            title={title}
            separator=""
            
            className="Demo__some-network__share-button"
          >
            <img src={Outline2 } height={50} width={50} />
          </WhatsappShareButton>

          <div className="Demo__some-network__share-count">&nbsp;</div>
        </div>

        <div className="Demo__some-network">
            <TwitterShareButton
            url={shareUrl}
            title={title}
            className="Demo__some-network__share-button"
            >
            <img src={Group} height={50} width={50} />
            </TwitterShareButton>

            <div className="Demo__some-network__share-count">&nbsp;</div>
        </div>

        </div>
    );
}

export default SocialMedia;