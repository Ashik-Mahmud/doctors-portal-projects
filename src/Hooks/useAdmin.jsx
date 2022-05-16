import { useEffect, useState } from "react";

const useAdmin = (user) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminLoading, setAdminLoading] = useState(false);
  useEffect(() => {
    (async () => {
      await fetch(
        `https://doctors-para-server.herokuapp.com/users/isAdmin?email=${user?.email}`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setIsAdmin(data.isAdmin);
          setAdminLoading(true);
        });
    })();
  }, [user]);
  return [isAdmin, adminLoading];
};

export default useAdmin;
