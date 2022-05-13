import { useEffect, useState } from "react";

const useTreatments = () => {
  const [treatments, setTreatments] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch("https://doctors-para-server.herokuapp.com/treatments")
      .then((res) => res.json())
      .then((data) => {
        setTreatments(data.result);
        setLoading(true);
      });
  }, []);
  return { loading, treatments, setTreatments };
};

export default useTreatments;
