import "server-only";

export default function Page() {
  return (
    <div className="flex flex-col items-center p-8">
      <main className="flex flex-col items-center max-w-2xl mx-auto">
        <h1 className="text-3xl font-semibold mb-4">About</h1>
        <h2 className="text-xl font-medium mb-2">Data Sources</h2>
        <h3 className="font-medium mb-2">API Providers:</h3>
        <p className="text-base">
          This application uses IP2Location.io{" "}
          <a
            href="https://www.ip2location.io"
            className="text-blue-500 underline"
          >
            IP geolocation
          </a>{" "}
          web service.
        </p>
      </main>
    </div>
  );
}
