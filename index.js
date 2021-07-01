
export const useAB = (experimentId) => {
  const variationId = Math.random() > 0.5 ? 1 : 0;
  window.ga('set', 'exp', `${experimentId}.${variationId}`);

  return variationId > 0;
};
