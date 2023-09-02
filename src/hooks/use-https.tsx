import React, { useState, useCallback } from "react";

interface RequestConfig {
  url: string;
  method?: string;
  headers?: Record<string, string>;
  body?: Record<string, any>;
}

const useHttps = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendRequest = useCallback(
    async (requestConfig: RequestConfig, applyData: (data: any) => void) => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(requestConfig.url, {
          method: requestConfig.method ? requestConfig.method : "GET",
          headers: requestConfig.headers ? requestConfig.headers : {},
          body: JSON.stringify(requestConfig.body) || null,
        });

        if (!response.ok) {
          throw new Error("Request failed!");
        }

        const data = await response.json();
        applyData(data);
      } catch (err: any) {
        alert("Please give proper breed");
        setError(err.message || "Something went wrong!");
      }
      setIsLoading(false);
    },
    []
  );

  return {
    isLoading,
    sendRequest,
    error,
  };
};

export default useHttps;
