"use client";

import { useState, useEffect } from 'react';
import { Homee } from "@/components/component/homee";
import Loading from "@/app/loading"; // Assuming you save your loading spinner in a file called `Loading.js`

export default function Home() {
  const [loading, setLoading] = useState(true); // State to track loading

  // Simulate data loading or an async process
  useEffect(() => {
    // Mocking a loading time of 2 seconds (replace this with your actual loading logic)
    const timer = setTimeout(() => {
      setLoading(false); // After 2 seconds, hide the spinner
    }, 2000);

    // Cleanup the timer when component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? ( // Conditionally render the spinner or the Homee component
        <Loading /> // Show loading spinner if `loading` is true
      ) : (
        <Homee /> // Show `Homee` component once loading is complete
      )}
    </>
  );
}

