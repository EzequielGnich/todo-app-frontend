import { useQuery } from "react-query";
import { TEN_MINUTES } from "../../../../config/constants";
import { GET_ALL_TODOS } from "./models";
import { getAllTodos } from "./services";

export const useGetAllTodos = () => {
  return useQuery(
    GET_ALL_TODOS,
    async () => {
      return getAllTodos();
    },
    {
      staleTime: TEN_MINUTES,
    }
  );
};
