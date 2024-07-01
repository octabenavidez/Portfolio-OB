import { motion } from "framer-motion";
import { LANGUAGES } from "../../utils/data";
import { useTranslation } from "react-i18next";

export default function ChangeLanguage() {
  const { i18n, t } = useTranslation();

  const changeLanguage = (code) => {
    console.log(code);
    i18n.changeLanguage(code);
  };

  return (
    <div className="relative mx-auto mb-2 mt-5 h-12 w-72 gap-1 md:absolute md:inset-auto md:right-1 md:top-8 md:mx-6">
      <motion.select
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="h-full w-full rounded-[7px] border border-t-transparent bg-transparent px-3 py-2.5 font-['Roboto_Mono',_monospace] text-sm text-[var(--text-color)] outline-0 transition-all"
        onChange={(e) => changeLanguage(e.target.value)}
        value={localStorage.getItem("i18nextLng") || "default"}
      >
        {LANGUAGES.map((language) => (
          <option
            key={language.code}
            className="text-[#222]"
            value={language.code}
          >
            {language.lang}
          </option>
        ))}
      </motion.select>
      <motion.label
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none font-['Roboto_Mono',_monospace] text-[11px] font-normal leading-tight text-[var(--text-color)] transition-all before:pointer-events-none before:mr-1 before:mt-[6.5px] before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-l before:border-t before:transition-all after:pointer-events-none after:ml-1 after:mt-[6.5px] after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-r after:border-t after:transition-all"
      >
        {t("selectLanguage")}
      </motion.label>
    </div>
  );
}
