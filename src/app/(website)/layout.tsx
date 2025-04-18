import Nav from "@/app/components/Nav";
import Footer from "@/app/components/Footer";

export default function MinPagesLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<main className="min-h-screen">
			<div className="mx-auto max-w-[800px] p-4">
				<Nav />
				{children}
				<Footer />
			</div>
		</main>
	);
}