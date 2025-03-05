import SkillIcons from "@/components/skills-icons";
import Title from "@/components/title";
import AboutContent from "@/components/about-content";
import I18nProvider from "@/components/I18nProvider";

export default function About() {
  return (
    <section className="flex flex-col items-center min-h-screen py-16 container m-auto">
      <div className="mb-12">
        <Title title="About me" />
      </div>
      <I18nProvider>
        <AboutContent></AboutContent>
      </I18nProvider>
      <div className="mt-12 mb-2">
        <Title title="Skills" />
      </div>
      <div className="skills-block">
        <SkillIcons></SkillIcons>
      </div>
    </section>
  );
}
