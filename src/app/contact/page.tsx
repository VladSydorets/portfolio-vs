import ContactForm from "@/components/contact-form";
import I18nProvider from "@/components/I18nProvider";

export default function Contact() {
  return (
    <section>
      <I18nProvider>
        <ContactForm />
      </I18nProvider>
    </section>
  );
}
