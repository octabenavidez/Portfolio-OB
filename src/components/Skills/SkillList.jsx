import { useTranslation } from "react-i18next";

export default function SkillList({ src, skill }) {
  const { t } = useTranslation();

  return (
    <span className="flex items-center gap-2">
      <img className="w-5" src={src} alt={`Checkmark ${t("alt.skillsIcon")}`} />
      <p>{skill}</p>
    </span>
  );
}
