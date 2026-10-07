import type { SimulationFormData } from "../data/simulation";

const LOCAL_STORAGE_KEY = "simulation-data";

export interface SimulationHistoryItem extends SimulationFormData {
  createdAt: string;
}

const isSimulationHistoryItem = (
  value: unknown,
): value is SimulationHistoryItem => {
  if (!value || typeof value !== "object") {
    return false;
  }

  const item = value as Record<string, unknown>;

  return (
    typeof item.createdAt === "string" &&
    typeof item.income === "string" &&
    typeof item.expenses === "string" &&
    typeof item.debts === "string" &&
    typeof item.goalName === "string" &&
    typeof item.goalAmount === "string" &&
    typeof item.goalDeadline === "string"
  );
};

const getValidSavedHistory = (value: unknown): SimulationHistoryItem[] => {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.filter(isSimulationHistoryItem);
};

export const useSimulationStorage = () => {
  const saveFormData = (formData: SimulationFormData) => {
    const storage = localStorage.getItem(LOCAL_STORAGE_KEY);

    let savedData: unknown[] = [];

    if (storage) {
      try {
        const parsed = JSON.parse(storage) as unknown;
        savedData = Array.isArray(parsed) ? parsed : [];
      } catch {
        savedData = [];
      }
    }

    const validSavedData = getValidSavedHistory(savedData);
    const newEntry: SimulationHistoryItem = {
      ...formData,
      createdAt: new Date().toISOString(),
    };

    const nextEntries = [newEntry, ...validSavedData];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(nextEntries));
  };

  const getSavedFormData = () => {
    if (typeof window === "undefined") {
      return [] as SimulationHistoryItem[];
    }

    const storage = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (!storage) {
      return [] as SimulationHistoryItem[];
    }

    try {
      const parsed = JSON.parse(storage) as unknown;
      const validItems = getValidSavedHistory(parsed);

      if (validItems.length !== (Array.isArray(parsed) ? parsed.length : 0)) {
        localStorage.setItem(
          LOCAL_STORAGE_KEY,
          JSON.stringify(validItems),
        );
      }

      return validItems;
    } catch {
      localStorage.removeItem(LOCAL_STORAGE_KEY);
      return [] as SimulationHistoryItem[];
    }
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
