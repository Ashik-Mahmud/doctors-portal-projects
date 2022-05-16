import { useEffect, useState } from "react";

const useCreateUser = (user) => {
  const [response, setResponse] = useState("");
  const [userLoading, setUserLoading] = useState(true);
  useEffect(() => {
    (async () => {
      await fetch(`http://localhost:5000/users`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({
          uid: user?.uid,
          email: user?.email,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setResponse(data);
          setUserLoading(false);
        });
    })();
  }, [user]);
  return [response, userLoading];
};

export default useCreateUser;
