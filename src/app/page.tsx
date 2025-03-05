import Hero from "@/components/hero";
import I18nProvider from "@/components/I18nProvider";

export default function Home() {
  return (
    <main className="container w-full m-auto flex flex-col justify-start h-screen">
      <I18nProvider>
        <Hero />
      </I18nProvider>
    </main>
  );
}
