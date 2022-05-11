import { useEffect, useState } from "react";

const useTreatments = () => {
  const [treatments, setTreatments] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setTreatments(data);
        setLoading(true);
      });
  }, []);
  return { loading, treatments, setTreatments };
};

export default useTreatments;
