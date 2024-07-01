import { INPUTS } from "../../utils/data";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function Contact() {
  const { t } = useTranslation();

  const refs = {
    name: useRef(null),
    email: useRef(null),
    message: useRef(null),
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = refs.name.current.value;
    const email = refs.email.current.value;
    const message = refs.message.current.value;

    const serviceId = "service_z02tf4n";
    const templateId = "template_1qa9ush";
    const publicKey = "96ctJWkrZr6AFqMKV";

    const templateParams = {
      from_name: name,
      from_email: email,
      message: message,
      to_name: "Octavio Benavidez",
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        refs.name.current.value = "";
        refs.email.current.value = "";
        refs.message.current.value = "";
        Swal.fire({
          icon: "success",
          title: "Email enviado correctamente!",
          showConfirmButton: false,
          timer: 2500,
        });
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  return (
    <section id="contact" className="flex flex-col text-center">
      <h1 className="section-title">{t("contact.title")}</h1>
      <form
        className="md:w-2xl flex flex-col gap-8 font-['Roboto_Mono',_monospace] text-[var(--form-text-color)]"
        onSubmit={handleSubmit}
      >
        {INPUTS.map((input) => (
          <div key={input.name}>
            {input.type !== "textarea" ? (
              <input
                ref={refs[input.name]}
                className="box-border h-14 w-64 justify-self-center border-[1px] border-[#888] border-[solid] bg-[var(--background-color)] ps-4 placeholder-[var(--form-text-color)] md:w-[600px] md:text-xl"
                type={input.type}
                name={input.name}
                id={input.name}
                placeholder={t(`contact.${input.placeholder}`)}
                required
              />
            ) : (
              <textarea
                ref={refs[input.name]}
                className="box-border h-64 w-64 resize-none justify-self-center border-[1px] border-[#888] border-[solid] bg-[var(--background-color)] ps-4 pt-4 placeholder-[var(--form-text-color)] md:w-[600px] md:text-xl"
                name={input.name}
                id={input.name}
                placeholder={t(`contact.${input.placeholder}`)}
                required
              />
            )}
          </div>
        ))}
        <input
          className="mx-auto h-14 w-32 cursor-pointer rounded-[20px] border-none bg-[var(--btn-color)] text-xl font-bold text-[var(--btn-text-color)] [box-shadow:0_4px_4px_rgba(0,_0,_0,_0.25)] [transition:box-shadow_200ms_ease-in-out,_transform_200ms_ease-in-out] hover:scale-105 active:translate-y-1 active:[box-shadow:0_2px_2px_rgba(0,_0,_0,_0.25)]"
          type="submit"
          value={t("contact.submit")}
        />
      </form>
    </section>
  );
}
