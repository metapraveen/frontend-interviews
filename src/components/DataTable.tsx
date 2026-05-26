import React, { useEffect, useState } from "react";
import {
  fetchBudgetForecasts,
  fetchBudgets,
  BudgetForecast,
  Budget,
} from "../utilities/data";

const DataTable: React.FC = () => {
  const [budgets, setBudgets] = useState<Budget[]>([]);
  const [budgetForecasts, setBudgetForecasts] = useState<BudgetForecast[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const [budgetsResponse, budgetForecastResponse] = await Promise.all([
        fetchBudgets(),
        fetchBudgetForecasts(),
      ]);

      setBudgets(budgetsResponse);
      setBudgetForecasts(budgetForecastResponse);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>budget id</th>
          <th>budget name</th>
          <th>budget forecast</th>
        </tr>
      </thead>
      <tbody>
        {budgets.map((budget, index) => (
          <tr key={budget.id}>
            <td>{budget.id}</td>
            <td>{budget.name}</td>
            <td>{budgetForecasts[index]?.percentageSpent}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
