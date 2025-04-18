
export default function MinPagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="h-max">
      <div className="mx-auto max-w-[800px] p-4">
        {children}
      </div>
    </main>
  );
}
