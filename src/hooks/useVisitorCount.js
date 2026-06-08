import { useEffect, useState } from "react";

function useVisitorCount() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    fetch("/api/visit")
      .then((res) => res.json())
      .then((data) => setCount(data.count))
      .catch(() => setCount(null));
  }, []);

  return count;
}

export default useVisitorCount;
