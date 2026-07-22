import type { SimulationFormData } from "../data/simulation";

const LOCAL_STORAGE_KEY = "simulation-data";

export interface SimulationHistoryItem extends SimulationFormData {
  createdAt: string;
}

export const useSimulationStorage = () => {
  const saveFormData = (formData: SimulationFormData) => {
    const storage = localStorage.getItem(LOCAL_STORAGE_KEY);

    const savedData = storage
      ? (JSON.parse(storage) as SimulationHistoryItem[])
      : [];

    const newEntry: SimulationHistoryItem = {
      ...formData,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify([newEntry, ...savedData]),
    );
  };

  const getSavedFormData = () => {
    if (typeof window === "undefined") {
      return [] as SimulationHistoryItem[];
    }

    const storage = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (!storage) {
      return [] as SimulationHistoryItem[];
    }

    return JSON.parse(storage) as SimulationHistoryItem[];
  };

  const clearSavedFormData = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  const removeSavedFormData = (createdAt: string) => {
    const currentData = getSavedFormData();
    const updatedData = currentData.filter(
      (item) => item.createdAt !== createdAt,
    );

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedData));

    return updatedData;
  };

  return {
    saveFormData,
    getSavedFormData,
    clearSavedFormData,
    removeSavedFormData,
  };
};
