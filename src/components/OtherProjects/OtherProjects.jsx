import { useTranslation } from "react-i18next";
import Card from "./Card.jsx";
import { OTHER_PROJECTS } from "../../utils/data.js";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Reveal from "../../utils/Reveal.jsx";

export default function OtherProjects() {
  const { t } = useTranslation();
  const settings = {
    autoplay: true,
    autoplaySpeed: 2500,
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section
      id="other-projects"
      className="flex flex-col items-center justify-center text-center"
    >
      <Reveal>
        <h1 className="section-title">{t("otherProjects.title")}</h1>
        <div className="mx-auto max-w-[80vw] md:max-w-[800px]">
          <Slider {...settings}>
            {OTHER_PROJECTS.map((project) => (
              <Card
                key={project}
                src={project.src}
                link={project.link}
                description={t(
                  `otherProjects.projectDescriptions.${project.description}`,
                )}
              />
            ))}
          </Slider>
        </div>
      </Reveal>
    </section>
  );
}
