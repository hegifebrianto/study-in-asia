import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchAnimeList = async ({ pageParam = 1 }) => {
  const res = await axios.get(`https://api.jikan.moe/v4/anime?page=${pageParam}`);
  return res.data;
};

export const useAnimeList = () => {
  return useInfiniteQuery({
    queryKey: ["animeList"],
    queryFn: fetchAnimeList,
    initialPageParam: 1, 
    getNextPageParam: (lastPage, pages) => {
      return lastPage.pagination.has_next_page ? pages.length + 1 : undefined;
    },
  });
};
