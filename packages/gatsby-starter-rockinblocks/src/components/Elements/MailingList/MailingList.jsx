import React from 'react'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
const url = "//oblongobjects.us7.list-manage.com/subscribe/post?u=713bb79e6268e74591110de47&amp;id=582f831520";

const MailingList = () => {
  return (
    <div className="mailing-list bg-dark">
      <div className="text-center">
        <h3 className="font-family-mono">
          Join my mailing list to stay updated with web development news.
        </h3>
        <div className="mailchimp-subscribe-wrapper">
          <MailchimpSubscribe url={url} />
        </div>
      </div>
    </div>
  )
}

export default MailingList
