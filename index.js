import { useState, useEffect, useCallback } from "react";

export const useAB = (experiment) => {
  const [variant, setVariant] = useState(null);
  const variantName = `ab_${experiment}`;

  const handleVariant = useCallback(() => {
    setVariant(experiment);
  }, [experiment]);

  useEffect(() => {
    window.addEventListener(variantName, handleVariant);

    return () => {
      window.removeEventListener(variantName, handleVariant);
    };
  }, [variantName, handleVariant]);

  return variant;
};
