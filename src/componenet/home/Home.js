import React from "react";
import Nav from "../nav/Nav";
import TypingAnimation from "./TypingAnimation";
import "../../styleSheets/Home.css";
import { motion } from "framer-motion";

import LinkItem from "../nav/LinkItem";
import { socialLinks } from "../nav/Data";

const Home = () => {
  return (
    <>
      <Nav />
      <section className="home-container" id="home">
        <motion.div //Animación con framer motion
          className="home-container__animation"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <h1 className="home-container__title">jorge gamarra</h1>
          <p className="home-container__typing">
            I'm <TypingAnimation />
          </p>

          <div className="iconHome">
            {socialLinks.map((link) => (
              <LinkItem icon={link.icon} iconClassName="icon-home" />
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Home;
