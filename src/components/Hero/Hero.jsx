import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../context/ThemeContext";
import SocialMedia from "./SocialMedia";
import { SOCIAL_ICONS, SOCIAL_MEDIA } from "../../utils/data";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      id="hero"
      className="flex h-[100dvh] min-h-[500px] flex-col items-center justify-center gap-5 text-center md:flex-row-reverse md:justify-evenly"
    >
      <div className="relative">
        <motion.img
          className="max-w-52 md:w-[400px] md:max-w-[400px]"
          src={heroImg}
          alt={t("alt.profileImg")}
          initial={{ y: -5 }} // Posición inicial
          animate={{ y: 5 }} // Posición final
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />

        <img
          className="absolute right-[-20px] top-0 w-6 cursor-pointer"
          src={themeIcon}
          alt={t("alt.themeIcon")}
          onClick={toggleTheme}
        />
      </div>
      <motion.div
        className="flex flex-col justify-center gap-5"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <h1>
          Octavio
          <br />
          Benavidez
        </h1>
        <h2 className="font-bold">{t("hero.stack")}</h2>
        <span className="flex justify-center gap-6">
          {SOCIAL_MEDIA.map((socialMedia) => (
            <SocialMedia
              key={socialMedia.name}
              {...socialMedia}
              src={SOCIAL_ICONS[theme][socialMedia.name]}
            />
          ))}
        </span>
        <p className="mx-auto max-w-[24ch]">{t("hero.description")}</p>
        <a className="w-fit self-center" href={CV} download>
          <button className="mt-1 h-14 w-32 rounded-[20px] border-none bg-[var(--btn-color)] text-xl font-bold text-[var(--btn-text-color)] [box-shadow:0_4px_4px_rgba(0,_0,_0,_0.25)] [transition:box-shadow_200ms_ease-in-out,_transform_200ms_ease-in-out] hover:scale-105 active:translate-y-1 active:[box-shadow:0_2px_2px_rgba(0,_0,_0,_0.25)]">
            {t("hero.curriculum")}
          </button>
        </a>
      </motion.div>
    </motion.section>
  );
}
