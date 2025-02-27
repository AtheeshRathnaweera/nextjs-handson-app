import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="row-start-4 flex gap-6 flex-wrap items-center justify-center mt-2 p-8 pt-9">
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
  );
}