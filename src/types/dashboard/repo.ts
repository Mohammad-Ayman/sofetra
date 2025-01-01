export interface IRepo {
  id: string;
  name: string;
  owner: {
    avatar_url: string;
    login: string;
  };
}
