import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import RedditIcon from "@material-ui/icons/Reddit";

function Footer() {
  return (
    <div className="footer">
      <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
      <div className="footer__icons">
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
        <RedditIcon />
      </div>
      <p>Amazon-Clone created by Fahmid Shabab Khorsheed</p>
    </div>
  );
}

export default Footer;
