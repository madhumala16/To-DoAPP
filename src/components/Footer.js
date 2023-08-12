import React from 'react'
import {
  FaGithub,
  FaFacebookF,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FiInstagram, FiMail, FiSend } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="w-full bg-bodyColor">
      <p className="text-sm text-gray-400 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quia
        delectus necessitatibus facilis similique, alias ratione aspernatur qui
        optio? Est.
      </p>
      <div className="flex justify-center gap-2 mt-3">
        <a
          href="https://github.com/noorjsdivs"
          target="_blank"
          rel="noreferrer"
        >
          <span className="footerIcon">
            <FaGithub />
          </span>
        </a>
        <span className="footerIcon">
          <FaLinkedin />
        </span>
        <span className="footerIcon">
          <FaYoutube />
        </span>
        <span className="footerIcon">
          <FaFacebookF />
        </span>
        <span className="footerIcon">
          <FiInstagram />
        </span>
        <span className="footerIcon">
          <FaTwitter />
        </span>
        <span className="footerIcon">
          <FiSend />
        </span>
        <span className="footerIcon">
          <FiMail />
        </span>
      </div>
    </div>
  );
}

export default Footer