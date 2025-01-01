"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import SearchBar from "./SearchBar";
import DisplayRepos from "./DisplayRepos";
import { IRepo } from "@/types/dashboard/repo";

const Dashboard = ({ repos }: { repos: IRepo[] }) => {
  const router = useRouter();
  const [filteredRepos, setFilteredRepos] = useState(repos);

  const handleSearch = (searchTerm: string) => {
    const filtered = repos.filter((repo) =>
      repo.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRepos(filtered);
  };

  const handleLogout = () => {
    document.cookie =
      "auth-token=; path=/; max-age=0;"; // Remove the auth-token cookie
    router.push("/"); // Redirect to the login page
  };

  return (
    <main className="p-6 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">GitHub Repositories</h2>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
        >
          Logout
        </button>
      </div>
      <SearchBar onSearch={handleSearch} />
      <DisplayRepos repos={filteredRepos} />
    </main>
  );
};

export default Dashboard;
