import Link from "next/link";

export default function ContactPage() {
	return (
		<>
			<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
				<div className="space-y-4">
					<h2 className="font-semibold text-xl">Send us a message</h2>
					<form className="space-y-4">
						<div>
							<label htmlFor="name" className="mb-1 block font-medium text-sm">
								Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								className="w-full rounded-lg border border-edge bg-secondary px-4 py-2 text-heading focus:border-text-main focus:outline-none"
								required
							/>
						</div>
						<div>
							<label htmlFor="email" className="mb-1 block font-medium text-sm">
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								className="w-full rounded-lg border border-edge bg-secondary px-4 py-2 text-heading focus:border-text-main focus:outline-none"
								required
							/>
						</div>
						<div>
							<label
								htmlFor="subject"
								className="mb-1 block font-medium text-sm"
							>
								Subject
							</label>
							<input
								type="text"
								id="subject"
								name="subject"
								className="w-full rounded-lg border border-edge bg-secondary px-4 py-2 text-heading focus:border-text-main focus:outline-none"
								required
							/>
						</div>
						<div>
							<label
								htmlFor="message"
								className="mb-1 block font-medium text-sm"
							>
								Message
							</label>
							<textarea
								id="message"
								name="message"
								rows={4}
								className="w-full rounded-lg border border-edge bg-secondary px-4 py-2 text-heading focus:border-text-main focus:outline-none"
								required
							/>
						</div>
						<button
							type="submit"
							className="w-full rounded-lg bg-text-main px-4 py-2 font-medium text-secondary transition-colors hover:bg-edge cursor-pointer"
						>
							Send Message
						</button>
					</form>
				</div>

				{/* Contact Information */}
				<div className="space-y-6">
					<h2 className="font-semibold text-xl">Contact Information</h2>
					<div className="space-y-4">
						<div>
							<h3 className="font-medium text-heading text-lg">Address</h3>
							<p>
								123 Developer Street
								<br />
								Tech Valley, CA 94025
							</p>
						</div>
						<div>
							<h3 className="font-medium text-heading text-lg">Email</h3>
							<Link href={"mailto:support@jrdev.org"}>support@jrdev.org</Link>
						</div>
						<div>
							<h3 className="font-medium text-heading text-lg">Phone</h3>
							<Link href={"tel:0692457741"}>+255 692 457 741</Link>
						</div>
						<div>
							<h3 className="font-medium text-heading text-lg">
								Office Hours
							</h3>
							<p>
								Monday - Friday: 9:00 AM - 6:00 PM
								<br />
								Saturday: 10:00 AM - 2:00 PM
								<br />
								Sunday: Closed
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}