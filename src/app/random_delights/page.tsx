import "server-only";

import APODNasa from "./_components/APODNasa";

export default function Page() {
  return (
    <div className="flex gap-6 flex-col items-center p-8">
      <div className="flex flex-col items-center max-w-2xl mx-auto">
        <h1 className="text-3xl font-semibold mb-4">Random Delights</h1>
        <p className="text-center">
          Welcome to Random Delights! 🎉
          <br />
          Get ready for a whirlwind of weirdness! Dive into delightful surprises
          that are sure to tickle your brain and your funny bone. Enjoy the
          nonsense!
        </p>
      </div>
      <div className="flex">
        <APODNasa/>
      </div>
    </div>
  );
}