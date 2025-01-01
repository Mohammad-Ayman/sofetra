import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-700">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">
        Oops! The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="bg-blue-500 text-white px-6 py-2 rounded shadow hover:bg-blue-600"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Custom404;
