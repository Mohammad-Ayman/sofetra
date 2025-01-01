import { IRepo } from "@/types/dashboard/repo";
import Image from "next/image";
import Link from "next/link";

const RepoCard = ({ repo }: { repo: IRepo }) => {
  const { name, owner } = repo;
  return (
    <li className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-lg p-4 w-64 h-60">
      <Image
        src={owner?.avatar_url}
        alt={name}
        width={80}
        height={80}
        className="rounded-full mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">
        {name}
      </h3>
      <Link
        href={`https://github.com/${owner?.login}/${name}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline text-sm mt-auto"
      >
        View Repository
      </Link>
    </li>
  );
};

export default RepoCard;
