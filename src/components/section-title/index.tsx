import React from 'react';

type Props = {
  title: string;
};

export default function SectionTitle({ title }: Props) {
  return (
    <h2 className="text-2xl sm:text-3xl font-bold dark:text-white text-black border-b-[3px] border-gray-400 dark:border-gray-600 pb-2 w-max mb-2">
      {title}
    </h2>
  );
}
