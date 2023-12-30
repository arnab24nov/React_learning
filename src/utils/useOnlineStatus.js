import { useState, useEffect } from "react";

const useOnlineStatus = () => {
  const [status, setStatus] = useState(true);
  useEffect(() => {
    checkStatus();
  }, []);

  const checkStatus = () => {
    setStatus(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener("offline", () => {
      setStatus(false);
    });
    window.addEventListener("online", () => {
      setStatus(true);
    });
  });

  return status;
};

export default useOnlineStatus;
