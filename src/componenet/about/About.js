import "../../styleSheets/About.css";
import { InfoItem1, InfoItem2 } from "./InfoItem";
import { AiFillCaretRight } from "react-icons/ai";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <section className="about" id="about">
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
          <h1 className="about_title">About</h1>
          <p className="about__introduce">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
            dolores dignissimos, nihil et officia vero id enim quam facilis nulla
            eos vel dolore harum aut quasi blanditiis eligendi nisi quidem.
          </p>
          <div className="about__content">
            <div className="about__content-image ">
              <img
                className="about__content-profile"
                src={require("../../assets/profile-img.jpg")}
                alt="profile"
              />
            </div>

            <div className="about__content-detail">
              <h2 className="about__content-role">web developer & teacher</h2>

              <p className="about__content-summary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                illo dolores eum eligendi soluta iusto natus. Quae vero, velit
                sunt
              </p>

              <div className="about__content-info-list">
                <div className="about__content-info-item">
                  {InfoItem1.map((text, index) => {
                    const [key, value] = text.split(": "); //split divide el texto para aplicar neguita al texto que va antes de los dos puntos
                    return (
                      <div key={index}>
                        <AiFillCaretRight />
                        <span className="about__content-text-bold">{key}:</span> {value}
                      </div>
                    );
                  })}
                </div>

                <div className="about__content-info-item">
                  {InfoItem2.map((text, index) => {
                    const [key, value] = text.split(": "); //split divide el texto para aplicar neguita al texto que va antes de los dos puntos
                    return (
                      <div key={index}>
                        <AiFillCaretRight />
                        <span className="about__content-text-bold
                      ">{key}:</span> {value}
                      </div>
                    );
                  })}
                </div>
              </div>

              <p>
                Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis. Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};
export default About;
