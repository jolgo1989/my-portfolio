import React from "react";
import {
  FaHome,
  FaUser,
  FaFileAlt,
  FaBookOpen,
  FaServer,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

export const navLinks = [
  {
    id: 1,
    text: "home",
    icon: <FaHome />,
  },
  {
    id: 2,
    text: "about",
    icon: <FaUser />,
  },
  {
    id: 3,
    text: "resume",
    icon: <FaFileAlt />,
  },
  {
    id: 4,
    text: "porfolio",
    icon: <FaBookOpen />,
  },
  {
    id: 5,
    text: "service",
    icon: <FaServer />,
  },
  {
    id: 6,
    text: "contact",
    icon: <FaEnvelope />,
  },
];

export const socialLinks = [
  {
    id: 1,
    icon: <FaTwitter />,
  },
  {
    id: 2,
    icon: <FaFacebookF />,
  },
  {
    id: 3,
    icon: <FaInstagram />,
  },
  {
    id: 4,
    icon: <FaLinkedinIn />,
  },
  {
    id: 5,
    icon: <FaGithub />,
  },
];
