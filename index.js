import { useState, useEffect, useCallback } from "react";

export const useAB = (experiment) => {
  const [variant, setVariant] = useState(false);

  const handleVariant = useCallback(() => {
    setVariant(true);
  }, [experiment]);

  useEffect(() => {
    window.addEventListener(experiment, handleVariant);

    return () => {
      window.removeEventListener(experiment, handleVariant);
    };
  }, [experiment, handleVariant]);

  return variant;
};
