"use client";

import { useError } from "@/context/ErrorContext";
import { useState } from "react";

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useFetch<T>() {
  const { setError } = useError();
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    loading: false,
    error: null,
  });

  const fetchData = async (fetcher: () => Promise<T>) => {
    setState({ data: null, loading: true, error: null });
    setError(null);

    try {
      const result = await fetcher();
      if (!result) {
        setState({ data: null, loading: false, error: "No data available." });
        setError("No data available.");
      } else {
        setState({ data: result, loading: false, error: null });
      }
    } catch (err: any) {
      let message = "Server error. Please try again.";
      if (err.name === "TypeError") {
        message = "Network error. Please check your connection.";
      } else if (err.status === 401) {
        message = "Unauthorized. Please login again.";
      }

      setState({ data: null, loading: false, error: message });
      setError(message);
    }
  };

  return { ...state, fetchData };
}
