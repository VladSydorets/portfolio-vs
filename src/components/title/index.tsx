import { Aleo } from "next/font/google";

type Props = {
  title: string;
};

const aleo = Aleo({ weight: ["700"], subsets: ["latin"], style: ["normal"] });

export default function Title({ title }: Props) {
  return (
    <h1 className={`${aleo.className} text-5xl text-[#A855F7] font-bold`}>
      {title}
    </h1>
  );
}
