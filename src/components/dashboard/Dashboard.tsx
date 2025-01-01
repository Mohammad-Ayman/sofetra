"use client";

import { useState } from "react";
import SearchBar from "./SearchBar";
import DisplayRepos from "./DisplayRepos";
import { IRepo } from "@/types/dashboard/repo";

const Dashboard = ({ repos }: { repos: IRepo[] }) => {
  const [filteredRepos, setFilteredRepos] = useState(repos);

  const handleSearch = (searchTerm: string) => {
    const filtered = repos.filter((repo) =>
      repo.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredRepos(filtered);
  };

  return (
    <main className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        GitHub Repositories
      </h2>
      <SearchBar onSearch={handleSearch} />
      <DisplayRepos repos={filteredRepos} />
    </main>
  );
};

export default Dashboard;
