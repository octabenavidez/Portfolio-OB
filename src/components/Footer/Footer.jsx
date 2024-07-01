import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <section id="footer" className="text-center">
      <p className="text-[16px] text-[var(--footer-text-color)]">
        &copy; {new Date().getFullYear()} Octavio Benavidez. <br />
        {t("footer.text")}
      </p>
    </section>
  );
}
