export default function GamesLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      Hello from layout for games pages
      <nav></nav>

      {children}
    </section>
  );
}
