import React from 'react'
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import "./Footer.css";

 function Footer() {
    return (
      <div className="Footer">
        <Link>
          <IconButton className="insta__icon">
            <InstagramIcon fontSize="large" />
          </IconButton>
        </Link>
        <Link>
          <IconButton className="Link__icon">
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Link>
        <Link>
          <IconButton className="Face__icon">
            <FacebookIcon fontSize="large" />
          </IconButton>
        </Link>
      </div>
    );
}
export default Footer;