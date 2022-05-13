import { useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
const useUserAppointments = () => {
  const [userAppointments, setUserAppointments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(
      `https://doctors-para-server.herokuapp.com/booking?uid=${auth?.currentUser?.uid}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setUserAppointments(data.result);
        setLoading(true);
      });
  }, []);
  return { userAppointments, loading, setUserAppointments };
};

export default useUserAppointments;
