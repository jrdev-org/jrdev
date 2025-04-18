import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";

export default function MinPagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen">
      <Nav />
      <div className="mx-auto max-w-[800px] p-4">
        {children}
        <Footer />
      </div>
    </main>
  );
}
