import { NextPage } from "next";
import Link from "next/link";

const NotFound: NextPage = () => (
  <main className="flex-1 flex flex-col items-center justify-center p-6 text-center">
    <h1 className="text-9xl font-bold text-purple-900 dark:text-purple-100">
      404
    </h1>
    <h2 className="text-3xl font-semibold mt-4 text-purple-800 dark:text-purple-200">
      Page Not Found
    </h2>
    <p className="text-lg mt-4 max-w-md text-purple-700 dark:text-purple-300">
      The page you&apos;re looking for doesn&apos;t exist or has been moved.
    </p>
    <Link
      href="/"
      className="mt-8 px-4 py-2 rounded-md bg-purple-600 hover:bg-purple-700 text-white inline-block"
    >
      Return Home
    </Link>
  </main>
);

export default NotFound;
