import Link from "next/link";

const teamMembers = [
	{
		id: "cixf02ym000001b66m45ae4k8",
		name: "John Smith",
		title: "Lead Developer",
		image: "https://randomuser.me/api/portraits/women/36.jpg",
	},
	{
		id: "cixf02ym00weq932305ae4k8",
		name: "Sarah Johnson",
		title: "UI/UX Designer",
		image: "https://randomuser.me/api/portraits/women/32.jpg",
	},
	{
		id: "ciSAh32123sas001b66m45ae4k8",
		name: "Michael Chen",
		title: "Backend Engineer",
		image: "https://randomuser.me/api/portraits/men/36.jpg",
	},
	{
		id: "cmasdawjSIIO000001b66m45ae4k8",
		name: "Emily Davis",
		title: "Project Manager",
		image: "https://randomuser.me/api/portraits/women/21.jpg",
	},
	{
		id: "sKDQ9AW8009dasdWEESDA00001b66m45ae4k8",
		name: "David Wilson",
		title: "Full Stack Developer",
		image: "https://randomuser.me/api/portraits/men/23.jpg",
	},
	{
		id: "casd5678SDFKym000001b66m45ae4k8",
		name: "Lisa Anderson",
		title: "DevOps Engineer",
		image: "https://randomuser.me/api/portraits/women/36.jpg",
	}
];

export default function TeamPage() {
	return (
		<>
			<h1 className="mb-4 font-bold text-3xl">Our Team</h1>
			<hr className="my-6" />

			<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{teamMembers.map((member) => (
					<Link
						key={member.id}
						href={`/team/${member.id}`}
						className="group block"
					>
						<div className="rounded-lg border border-transparent bg-secondary p-6 transition-all group-hover:border-edge group-hover:shadow-edge group-hover:shadow-lg">
							<div className="flex flex-col items-center space-y-4 text-center">
								<div className="h-32 w-32 overflow-hidden rounded-full border-2 border-edge transition-all group-hover:border-text-main">
									<img
										src={member.image}
										alt={member.name}
										className="h-full w-full object-cover"
									/>
								</div>
								<div>
									<h3 className="font-semibold text-xl text-heading">
										{member.name}
									</h3>
									<p>{member.title}</p>
								</div>
							</div>
						</div>
					</Link>
				))}
			</div>
		</>
	);
}