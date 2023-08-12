export const instructionsChecker = () => {
  const storedValue = localStorage.getItem("showGeppetoInstruccions");

  if (storedValue === null) {
    localStorage.setItem("showGeppetoInstruccions", false);
  }

  return storedValue;
};
