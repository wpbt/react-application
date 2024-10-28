import axios from "axios";
import { useEffect, useState } from "react";

interface Todo {
  id: number;
  name: string;
}

export default function ToDoUseEffect() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setTodos(res.data))
      .catch((error) => setError(error));
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div className="mb-3 px-2">
      <ul className="list-group text-xs list-disc ml-5 mb-3">
        {todos.map((todo) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
      <p className="mb-3 text-sm font-semibold">Count: {todos.length}</p>
    </div>
  );
}
