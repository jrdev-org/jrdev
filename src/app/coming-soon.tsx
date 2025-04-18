import Link from "next/link";

const ComingSoonPage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-heading">Coming Soon</h1>
        <p className="mt-4 text-lg">
          We're working on something awesome. Stay tuned!
        </p>
        <Link
          href={"/"}
          className="block mt-8 rounded-md bg-secondary px-4 py-2 transition-colors hover:bg-edge"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ComingSoonPage;
