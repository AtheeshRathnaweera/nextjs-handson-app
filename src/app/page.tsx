import "server-only";

import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] gap-10 sm:p-20">
      <div className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div
          className="flex items-center justify-center bg-gradient-to-t p-10"
          style={{ paddingTop: 0, margin: "auto" }}
        >
          <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl font-bold mx-auto">
            Hi there! 👋 Welcome aboard!
          </h1>
        </div>
        <p
          className="text-center text-2xl font-light"
          style={{ width: "65%", margin: "auto" }}
        >
          Welcome to the Lab of Creativity! Whether you&apos;re here to learn,
          explore, or just see what&apos;s possible, you&apos;re in the right
          place. Dive in, click around, and join the adventure—there&apos;s
          always something new to discover. Enjoy the ride!
        </p>
      </div>

      <footer className="row-start-4 flex gap-6 flex-wrap items-center justify-center mt-16">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/AtheeshRathnaweera/nextjs-handson-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="text-2xl" />
          Go to the project →
        </a>
      </footer>
    </div>
  );
}
