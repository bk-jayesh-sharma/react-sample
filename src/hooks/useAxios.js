import axios from "axios";
import { useState, useEffect } from "react";
const useAxios = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(url)
      .then((res) => setData(res.data))
  }, [url]);

  return [data];
};

export default useAxios;