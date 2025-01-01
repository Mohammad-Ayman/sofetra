"use server";

const getRepos = async () => {
  try {
    const res = fetch("https://api.github.com/users/Mohammad-Ayman/repos");
    const data = (await res).json();
    return data || [];
  } catch (error) {
    console.log("error getrepos", error);
  }
};

export { getRepos };
