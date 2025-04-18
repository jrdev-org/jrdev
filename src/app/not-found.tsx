import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-heading">404 - Not Found</h1>
        <p className="mt-4 text-lg">
          Sorry, the page you are looking for could not be found.
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

export default NotFound;
