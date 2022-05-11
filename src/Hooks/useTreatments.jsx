import { useEffect, useState } from "react";

const useTreatments = () => {
  const [treatments, setTreatments] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/treatments")
      .then((res) => res.json())
      .then((data) => {
        setTreatments(data.result);
        setLoading(true);
      });
  }, []);
  return { loading, treatments, setTreatments };
};

export default useTreatments;
