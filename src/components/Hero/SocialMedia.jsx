import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function SocialMedia({ link, src, name }) {
  const { t } = useTranslation();

  return (
    <motion.a
      whileHover={{ scale: 1.2 }}
      className="m-0 w-fit self-center"
      href={link}
      target="_blank"
    >
      <img
        className="w-8"
        src={src}
        alt={`${name} ${t("alt.socialMediaIcon")}`}
      />
    </motion.a>
  );
}
