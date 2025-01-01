import { getRepos } from "@/actions/repos";
import dynamic from "next/dynamic";

const Dashboard = dynamic(() => import("@/components/dashboard/Dashboard"), {
  loading: () => <p>Loading Dashboard...</p>,
});

const DashboardPage = async () => {
  const repos = await getRepos();

  return <Dashboard repos={repos} />;
};

export default DashboardPage;
