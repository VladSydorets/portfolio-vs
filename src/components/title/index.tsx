import { Aleo } from "next/font/google";

type Props = {
  title: string;
};

const aleo = Aleo({ weight: ["700"], subsets: ["latin"], style: ["normal"] });

export default function Title({ title }: Props) {
  return (
    <h1
      className={`${aleo.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#A855F7]`}
    >
      {title}
    </h1>
  );
}
