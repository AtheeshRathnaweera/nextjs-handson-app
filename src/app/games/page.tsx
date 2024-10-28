import "server-only";

import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Link
          href="/games/rps"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl mx-auto hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <Image
            src="https://i.pinimg.com/736x/79/34/c6/7934c6cf66ceade7c2986687946067b2.jpg"
            alt="Description of image"
            width={200}
            height={200}
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Rock-Paper-Scissors ✊
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Jump into the classic Rock-Paper-Scissors showdown! Choose rock,
              paper, or scissors and outsmart your opponent. Will you claim
              victory?
            </p>
          </div>
        </Link>
        <Link
          href="/games/tic-tac-toe"
          className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl mx-auto hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
        >
          <Image
            src="https://cdn-icons-png.flaticon.com/512/3508/3508918.png"
            alt="Description of image"
            width={200}
            height={200}
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Tic-Tac-Toe 🎯
            </h5>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Challenge yourself in a classic game of Tic-Tac-Toe! Outmaneuver
              your opponent by getting three in a row. Can you win before they
              do?
            </p>
          </div>
        </Link>
      </main>
    </div>
  );
}
