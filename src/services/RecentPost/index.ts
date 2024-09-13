import envConfig from "@/src/config/emvConfig";

export const getRecentPost = async () => {
  const res = await fetch(
    `${envConfig.baseApi}/items?sortBy=-createdAt&limit=9`
  );
  const data = await res.json();
  return data;
};
