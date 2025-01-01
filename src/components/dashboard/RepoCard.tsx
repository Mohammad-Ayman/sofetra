import { IRepo } from "@/types/dashboard/repo";

const RepoCard = ({ name }: IRepo) => {
  return (
    <li className="flex felx-col justify-center items-center">
      <p>{name}</p>
    </li>
  );
};

export default RepoCard;
