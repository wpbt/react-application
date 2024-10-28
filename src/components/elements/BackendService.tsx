import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";
import LinkInfo from "./LinkInfo";
import HeadingTwo from "./HeadingTwo";

interface User {
  id: number;
  name: string;
}

export default function BackendService() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        if (res.data) setUsers(res.data);
      })
      .catch((error) => {
        // execute when the error is present!
        if (error instanceof CanceledError) {
          console.log("this error is not generated due to backend!");
          return;
        }
        console.error("Error during fetching: ", error);
      })
      .finally(() => {
        // execute once fetching is done!!!
      });

    return () => {
      // cancle the axios request
      controller.abort();
    };
  }, []);

  return (
    <>
      <HeadingTwo title="Connecting to a Backend (Fake)" />
      <div className="mb-3 px-2">
        {users.length !== 0 ? (
          <ul className="list-disc text-sm px-5">
            {users.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sm px-5">
            Couldn't connect to application backend!
          </p>
        )}
      </div>
      <div className="mb-3 px-2">
        <LinkInfo
          linkTitle="Fake API Service"
          url="https://jsonplaceholder.typicode.com"
          content="&#x2774;JSON&#x2775; Placeholder"
        />
        <LinkInfo
          linkTitle="HTTP Client"
          url="https://axios-http.com"
          content="Axios"
        />
      </div>
    </>
  );
}
