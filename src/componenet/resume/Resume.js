import React from "react";
import "../../styleSheets/Resume.css";

const Resume = () => {
  return (
    <article className="resume" id="resume">
      <h1 className="resume__title">Resume</h1>
      <p className="resume__paragraph">
        Licenciado en informática con más de diez años de experiencia en el campo educativo. Me apasiona la enseñanza y el aprendizaje de las nuevas tecnologías, así como el desarrollo de proyectos innovadores que aporten soluciones a los problemas de la sociedad. Tengo habilidades en programación, diseño web, bases de datos, gestión de sistemas informáticos etc.
      </p>

      <div class="resume__container">
        <section class="resume__summary">
          <h2 class="resume__summary-title">Sumary</h2>
          <h3 class="resume__summary-name">Jorge Leonardo Gamarra Ospino</h3>
          <em class="resume__summary-description">Soy un profesional en informática educativa con experiencia docente en diversas instituciones,he  ejercido como profesor de la facultad de ingeniería de sistemas de la Corporación Universitaria Remington. Mi interés se centra en la investigación y la divulgación de los avances en el campo de la informática, así como en la aplicación de las herramientas digitales para mejorar la calidad de la educación.</em>
          <ul class="resume__summary-contact">
            <li class="resume__summary-contact-item">Cali/Valle del Cauca/Colombia</li>
            <li class="resume__summary-contact-item">(+57)3016868149</li>
            <li class="resume__summary-contact-item">jgamarra@misena.edu.co</li>
          </ul>
        </section>

        <section class="resume__education">
          <h2 class="resume__education-title">Educación</h2>
          <article class="resume__education-degree">
            <h3 class="resume__education-degree-name">Maestria en informática educativa</h3>
            <time datetime="2016">2016</time>-<time datetime="2019">2019</time>
            <em>
              <p class="resume__education-degree-institution">URBE - Universidad Privada Dr. Rafael Belloso Chacín</p>
            </em>
            <p>Poseo con las habilidades sólidas en la concepción y ejecución de proyectos educativos integrados y comunitarios, haciendo uso de herramientas digitales de manera integral. Estas destrezas me han permitido fomentar un enfoque dinámico y participativo en la enseñanza, promoviendo un aprendizaje interactivo y enriquecedor para los estudiantes</p>
          </article>

          <article class="resume__education-degree">
            <h3 class="resume__education-degree-name">Licenciado en basica con enfasis en informática</h3>
            <time datetime="2011">2011</time>-<time datetime="2016">2016</time>
            <em class="resume__education-degree-institution"><p>Universidad del magdalena
            </p></em>
            <p>Cuento con sólidas competencias en programación y conocimientos en robótica, realidad aumentada, animación 3D, base de datos etc. Mi destreza en el manejo de herramientas web me capacita para enseñar, evaluar y formar en entornos académicos y sociales</p>
          </article>

        </section>

      </div>

      <section class="resume__experience">
        <h2 class="resume__experience-title">Experiencia profesional</h2>
        <article class="resume__experience-job">
          <h3 class="resume__experience-job-name">
            Corporación Universitaria Remington
          </h3>
          <time datetime="2016">2022</time>-<time datetime="2019">Presente</time>
          <p>
            <em class="resume__experience-job-department">Facultad de ingeneria de sistemas</em>
          </p>
          <address class="resume__experience-job-address">
            <li class="resume__experience-job-address-item">Ciudad:Cali-Valle del cauca</li>
            <li class="resume__experience-job-address-item">(574)3221000</li>
            <li class="resume__experience-job-address-item">Calle 51 No. 51-27 </li>
          </address>
        </article>

        <article class="resume__experience-job">
          <h3 class="resume__experience-job-name">
            Institución Educativa Técnica Comercial Hernando Navia Varón
          </h3>
          <time datetime="2016">2021</time>-<time datetime="2019">2023</time>
          <p>
            <em class="resume__experience-job-department">Docente tecnología e informática</em>
          </p>
          <address class="resume__experience-job-address">
            <li class="resume__experience-job-address-item">Ciudad:Cali-Valle del cauca</li>
            <li class="resume__experience-job-address-item">(57)602 4445597</li>
            <li class="resume__experience-job-address-item">Carrera 26p Numero 50-39 Barrio nueva floresta</li>
          </address>
        </article>
      </section>
    </article>
  );
};

export default Resume;
