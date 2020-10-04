import React from "react";
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";



const Styles = styled.div`
.social-container {
  padding: 25px 50px;
}
a.social {
  margin: 0 1rem;
  transition: transform 250ms;
  display: inline-block;
}
a.social:hover {
  transform: translateY(-2px);
}
a.facebook {
  color: #4968ad;
}
a.instagram {
  color: black;
}
`;


export default function SocialFollow() {
  return (
    <Styles>
      <div class="social-container">
        <a href="https://www.facebook.com/holycommunionri"
          className="facebook  social">
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a href="https://www.instagram.com/holycommunionri"
          className="instagram social">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
      </div>
    </Styles>
  );
}