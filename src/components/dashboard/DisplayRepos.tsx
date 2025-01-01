import { IRepo } from "@/types/dashboard/repo";
import RepoCard from "./RepoCard";

const DisplayRepos = ({ repos }: { repos: IRepo[] }) => {
  if (!repos || repos.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500 text-lg">No repositories found.</p>
      </div>
    );
  }

  return (
    <ul className="flex flex-row flex-wrap justify-center items-center gap-6">
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </ul>
  );
};

export default DisplayRepos;
