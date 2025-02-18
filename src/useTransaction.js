import { useContext } from "react";
// Import the ExpenseTrackerContext from the context file
import { ExpenseTrackerContext } from "./context/context";
// Import income and expense categories and a function to reset categories
import { incomeCategories, expenseCategories, resetCategories } from './constants/categories';

// Define a custom hook named useTransaction that takes a title as an argument
const useTransaction = (title) => {
    // Reset the categories to their initial state
    resetCategories();

    // Get the transaction data from the ExpenseTrackerContext
    const { transactionsList: transactions } = useContext(ExpenseTrackerContext);

    // Filter transactions based on the type (Income or Expenses)
    const transactionPerType = transactions.filter((t) => t.type === title);

    // Calculate the total amount for the filtered transactions
    const total = transactionPerType.reduce((acc, currVal) => acc += currVal.amount, 0);

    // Select the appropriate categories based on the title
    const categories = title === 'Income' ? incomeCategories : expenseCategories;

    console.log({ transactionPerType, total, categories });

    // Update the amount for each category based on the transactions
    transactionPerType.forEach((t) => {
        const category = categories.find((c) => c.type === t.category);
        if (category) category.amount += t.amount;
    });

    // Filter out categories that have no amount
    const filteredCategories = categories.filter((c) => c.amount > 0);

    // Prepare the data for the doughnut chart
    const chartData = {
        datasets: [{
            data: filteredCategories.map((c) => c.amount),
            backgroundColor: filteredCategories.map((c) => c.color)
        }],
        labels: filteredCategories.map((c) => c.type)
    };

    // Return the filtered categories, total amount, and chart data
    return { filteredCategories, total, chartData };
}

export default useTransaction;