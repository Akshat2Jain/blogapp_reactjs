import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setdata] = useState(null);
  const [isPending, setPending] = useState(true);
  const [isError, setisError] = useState(null);
  useEffect(() => {
    const abort = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abort.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch data");
          }
          return res.json();
        })
        .then((data) => {
          setdata(data);
          // console.log(data);
          setPending(false);
        })
        .catch((err) => {
          // console.log(err.message)
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setisError(err.message);
            setPending(false);
          }
        });
    }, 1000);
    return () => {
      abort.abort();
    };
  }, []);
  return { data, isPending, isError };
};
export default useFetch;
