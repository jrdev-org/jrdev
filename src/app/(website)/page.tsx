import Link from "next/link";

const projects = [
  { name: "TMS", url: "/projects/task-management" },
  { name: "E-commerce", url: "/projects/ecommerce" },
  { name: "Social Media Dashboard", url: "/projects/social-dashboard" },
  { name: "Weather", url: "/projects/weather-app" },
  { name: "Portfolio Builder", url: "/projects/portfolio" },
  { name: "E-commerce", url: "/projects/ecommerce" },
  { name: "Social Media Dashboard", url: "/projects/social-dashboard" },
  { name: "Weather", url: "/projects/weather-app" },
  { name: "Portfolio Builder", url: "/projects/portfolio" },
];

const socials = [
  { name: "GitHub", url: "https://github.com/jrdev" },
  { name: "LinkedIn", url: "https://linkedin.com/in/jrdev" },
  { name: "Twitter", url: "https://twitter.com/jrdev" },
  { name: "Discord", url: "https://discord.gg/jrdev" },
];

export default function HomePage() {
  return (
    <>
        <h1 className="text-center text-shadow-2xs text-shadow-heading text-7xl font-bold my-4">jrdev</h1>
        <p className="text-center my-4">
          <span className="text-2xl font-semibold block">
            &lt; Future Web, Future You /&gt;
            </span>
        </p>
        <div className="mb-8 flex items-center justify-center gap-6">
          <Link
            href="/login"
            className="rounded-lg font-bold border text-heading px-4 py-2 transition-all border-edge hover:bg-edge"
          >
            [ Login ]
          </Link>
          <Link
            href="/register"
            className="rounded-lg border border-edge bg-secondary px-4 py-2 transition-all hover:text-heading"
          >
            [ Sign Up ]
          </Link>
        </div>
        
        <div className="mb-8 grid grid-cols-3 gap-2">
          <div className="col-span-2 p-2">
            <h2 className="mb-2 font-semibold text-heading text-2xl">Projects</h2>
            <hr className="my-2 border-edge" />
            <div className="flex flex-wrap gap-2">
              {projects.map((project) => (
                <Link
                  key={`${project.name}-${Math.random()}`}
                  href={project.url}
                  className="rounded-full border border-transparent bg-secondary px-4 py-2 transition-all  hover:border-edge hover:text-heading"
                >
                  {project.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="col-span-1 p-2">
            <h2 className="mb-2 font-semibold text-heading text-2xl">Social</h2>
            <hr className="my-2 border-edge" />
            <div className="flex flex-col gap-3">
              {socials.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  className="transition-all hover:text-shadow-heading text-shadow-2xs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  [ {social.name} ]
                </Link>
              ))}
            </div>
          </div>
        </div>
        </>
  );
}