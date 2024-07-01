import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import SkillList from "./SkillList";
import { SKILLS } from "../../utils/data";
import { Fragment } from "react";
import { useTheme } from "../../context/ThemeContext";
import { useTranslation } from "react-i18next";
import Reveal from "../../utils/Reveal";

export default function Skills() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarkIconLight : checkMarkIconDark;

  // Agrupa los elementos de SKILLS en grupos de 5
  const chunkedSkills = [];
  for (let i = 0; i < SKILLS.length; i += 5) {
    chunkedSkills.push(SKILLS.slice(i, i + 5));
  }

  return (
    <Reveal>
      <section
        id="skills"
        className="flex flex-col items-center gap-8 text-center"
      >
        <h1 className="section-title">{t("skills.title")}</h1>

        {chunkedSkills.map((skillsGroup, index) => (
          <Fragment key={index}>
            <div className="flex max-w-[26ch] flex-wrap justify-evenly gap-4 gap-y-[40px] self-center md:max-w-fit md:gap-8">
              {skillsGroup.map((skill) => (
                <Fragment key={skill}>
                  <SkillList src={checkMarkIcon} skill={skill} />
                </Fragment>
              ))}
            </div>
            {index + 1 !== chunkedSkills.length && (
              <hr className="mx-auto block h-[2px] w-28 bg-[var(--text-color)] md:w-80" />
            )}
          </Fragment>
        ))}
      </section>
    </Reveal>
  );
}
