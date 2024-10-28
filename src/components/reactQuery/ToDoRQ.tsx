import useToDo from "./hooks/useToDo";

export default function ToDoRQ() {
  const { data, error, isLoading, isFetching } = useToDo();

  if (error) return <p>Something went wrong. Error: {error.message}</p>;

  if (isLoading) return <p>Loading .....</p>;

  if (isFetching) return <p>Fetching ... </p>;

  return (
    <div className="mb-3 px-2">
      <ul className="list-group text-xs list-disc ml-5 mb-3">
        {data?.data.map((item) => (
          <li key={item.id}>
            Name: {item.name}, User Name: {item.username}
          </li>
        ))}
      </ul>
      <p className="mb-3 text-sm font-semibold">Count: {data?.data.length}</p>
    </div>
  );
}
