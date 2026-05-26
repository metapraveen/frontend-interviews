export interface Budget {
  id: number;
  name: string;
}

export interface BudgetForecast {
  budgetId: number;
  percentageSpent: number;
}

export const fetchBudgets = (): Promise<Budget[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "android budget" },
        { id: 2, name: "ios budget" },
        { id: 3, name: "xmas budget" },
      ]);
    }, 1000);
  });
};

export const fetchBudgetForecasts = (): Promise<BudgetForecast[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { budgetId: 1, percentageSpent: 55 },
        { budgetId: 2, percentageSpent: 99 },
        { budgetId: 3, percentageSpent: 33 }, 
      ]);
    }, 2000);
  });
};
