import { useEffect, useState } from "react";

const useUsers = (user) => {
  const [users, setUsers] = useState([]);
  const [userLoading, setUserLoading] = useState(false);
  useEffect(() => {
    (async () => {
      await fetch(`http://localhost:5000/users`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUsers(data.result);
          setUserLoading(true);
        });
    })();
  }, [user]);
  return [users, userLoading];
};

export default useUsers;
