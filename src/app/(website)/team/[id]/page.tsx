import Image from "next/image";
import Link from "next/link";
const teamMembers = [
  {
    id: "cixf02ym000001b66m45ae4k8",
    name: "John Smith",
    title: "Lead Developer",
    image: "https://randomuser.me/api/portraits/women/36.jpg",
    bio: "John is an experienced lead developer passionate about building scalable and efficient web applications.",
    socials: [
      { platform: "linkedIn", link: "https://www.linkedin.com/in/johnsmith" },
      { platform: "github", link: "https://github.com/johnsmith" },
    ],
    projects: [
      {
        name: "E-commerce Platform",
        link: "https://example.com/ecommerce",
      },
      {
        name: "Data Analytics Dashboard",
        link: "https://example.com/analytics",
      },
    ],
    hobbies: ["Hiking", "Photography", "Reading"],
  },
  {
    id: "cixf02ym00weq932305ae4k8",
    name: "Sarah Johnson",
    title: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    bio: "Sarah is a creative UI/UX designer focused on creating intuitive and engaging user experiences.",
    socials: [
      { platform: "dribbble", link: "https://dribbble.com/sarahjohnson" },
      { platform: "twitter", link: "https://twitter.com/sarahjohnson" },
    ],
    projects: [
      {
        name: "Mobile App Redesign",
        link: "https://example.com/mobileapp",
      },
      {
        name: "Website Accessibility Audit",
        link: "https://example.com/accessibility",
      },
    ],
    hobbies: ["Painting", "Traveling", "Yoga"],
  },
  {
    id: "ciSAh32123sas001b66m45ae4k8",
    name: "Michael Chen",
    title: "Backend Engineer",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
    bio: "Michael is a skilled backend engineer specializing in building robust and scalable server-side solutions.",
    socials: [
      { platform: "linkedIn", link: "https://www.linkedin.com/in/michaelchen" },
      { platform: "github", link: "https://github.com/michaelchen" },
    ],
    projects: [
      {
        name: "API Development",
        link: "https://example.com/api",
      },
      {
        name: "Database Optimization",
        link: "https://example.com/database",
      },
    ],
    hobbies: ["Coding", "Gaming", "Cooking"],
  },
  {
    id: "cmasdawjSIIO000001b66m45ae4k8",
    name: "Emily Davis",
    title: "Project Manager",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
    bio: "Emily is a detail-oriented project manager with a passion for delivering successful projects on time and within budget.",
    socials: [
      { platform: "linkedIn", link: "https://www.linkedin.com/in/emilydavis" },
    ],
    projects: [
      {
        name: "Project X Launch",
        link: "https://example.com/projectx",
      },
      {
        name: "Agile Implementation",
        link: "https://example.com/agile",
      },
    ],
    hobbies: ["Reading", "Gardening", "Volunteering"],
  },
  {
    id: "sKDQ9AW8009dasdWEESDA00001b66m45ae4k8",
    name: "David Wilson",
    title: "Full Stack Developer",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
    bio: "David is a versatile full-stack developer proficient in both front-end and back-end technologies.",
    socials: [
      { platform: "github", link: "https://github.com/davidwilson" },
      { platform: "twitter", link: "https://twitter.com/davidwilson" },
    ],
    projects: [
      {
        name: "Full Stack Application",
        link: "https://example.com/fullstack",
      },
      {
        name: "React Native App",
        link: "https://example.com/reactnative",
      },
    ],
    hobbies: ["Coding", "Music", "Sports"],
  },
  {
    id: "casd5678SDFKym000001b66m45ae4k8",
    name: "Lisa Anderson",
    title: "DevOps Engineer",
    image: "https://randomuser.me/api/portraits/women/36.jpg",
    bio: "Lisa is a skilled DevOps engineer focused on automating and streamlining software development and deployment processes.",
    socials: [
      {
        platform: "linkedIn",
        link: "https://www.linkedin.com/in/lisaanderson",
      },
    ],
    projects: [
      {
        name: "CI/CD Pipeline",
        link: "https://example.com/cicd",
      },
      {
        name: "Cloud Infrastructure",
        link: "https://example.com/cloud",
      },
    ],
    hobbies: ["Technology", "Travel", "Cooking"],
  },
];

export default async function TeamPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const { id } = await params;
  const member = teamMembers.find((m) => m.id.toString() === id);
  if (!member) {
    return (
      <div className="flex items-center justify-center">
        <div className="border-edge bg-secondary hover:border-text-main hover:shadow-edge rounded-lg border p-8 text-center transition-all hover:shadow-lg">
          <h2 className="text-heading mb-2 text-2xl font-semibold">
            Member Not Found
          </h2>
          <p>The team member you're looking for doesn't exist.</p>
          <Link
            href="/team"
            className="hover:bg-edge mt-6 inline-block rounded-full bg-amber-200/10 px-6 py-2 transition-all"
          >
            View All Team Members
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <h1 className="mb-4 text-3xl font-bold">Team Member</h1>
      <hr className="my-6" />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div
          key={member.id}
          className="bg-secondary hover:border-edge hover:drop-shadow-text-main w-[750px] rounded-lg border border-transparent p-6 transition-all hover:shadow-lg"
        >
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="flex flex-col items-center text-center md:w-1/3">
              <div className="border-edge hover:border-text-main mb-4 h-32 w-32 overflow-hidden rounded-full border-2 transition-all">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-heading text-2xl font-semibold">
                {member.name}
              </h3>
              <p className="font-semibold">{member.title}</p>
              <div className="mt-4 flex gap-3">
                {member.socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-shadow-heading underline underline-offset-2 transition-all text-shadow-2xs"
                  >
                    <span className="capitalize">{social.platform}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-4 md:w-2/3">
              <p className="">{member.bio}</p>

              <div>
                <h4 className="text-heading mb-2 text-xl font-bold">
                  Notable Projects
                </h4>
                <ul className="list-inside list-disc space-y-1">
                  {member.projects.map((project, index) => (
                    <Link
                      className="hover:text-shadow-heading block text-shadow-2xs"
                      href={project.link}
                      key={index}
                    >
                      - {project.name}
                    </Link>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mb-2 font-semibold text-heading">Hobbies & Interests</h4>
                <div className="flex flex-wrap gap-2">
                  {member.hobbies.map((hobby, index) => (
                    <span
                      key={index}
                      className="bg-edge rounded-full px-3 py-1 text-sm"
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
