import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface User {
  id: number;
  name: string;
  username: string;
}

export default function useToDo() {
  const fetchUsers = () => {
    return axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => res);
  };
  const { data, error, isPending, isLoading, isFetching } = useQuery({
    queryKey: ["ToDoRQ"],
    queryFn: fetchUsers,
  });

  return { data, error, isPending, isLoading, isFetching };
}
