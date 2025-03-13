import { useCallback } from "react";

const useLocalStorage = (key) => {
  const getData = useCallback(() => {
    try {
      return JSON.parse(localStorage.getItem(key)) || [];
    } catch (e) {
      console.error("Failed to parse localStorage data", e);
      return [];
    }
  }, [key]);

  const saveData = useCallback(
    (data) => {
      localStorage.setItem(key, JSON.stringify(data));
    },
    [key]
  );

  const addData = useCallback(
    (newData) => {
      const data = getData();
      data.push(newData);
      console.log("Saving data to localStorage:", data);
      saveData(data);
    },
    [getData, saveData]
  );

  return { getData, saveData, addData };
};

export default useLocalStorage;
