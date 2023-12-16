import { useState } from "react";
import ExpenseList from "./ExpenseTracker/components/ExpenseList";
import Navbar from "./components/Navbar";
import ExpenseForm from "./ExpenseTracker/components/ExpenseForm";
import ExpenseFilter from "./ExpenseTracker/components/ExpenseFilter";

const App = () => {
  const [dark, setDark] = useState(false);

  const [categories, setCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", category: "Entertainment", amount: 12 },
    { id: 2, description: "bbb", category: "Groceries", amount: 24 },
  ]);

  const visibleExpenses = categories
    ? expenses.filter((expense) => expense.category === categories)
    : expenses;

  return (
    <div
      className={`px-4 py-12 min-h-screen ${
        dark ? "bg-zinc-800" : "bg-zinc-100"
      }`}
    >
      <header>
        <Navbar dark={dark} onDark={() => setDark(!dark)} />
      </header>

      <main>
        <ExpenseForm
          dark={dark}
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />

        <ExpenseFilter
          dark={dark}
          onSelect={(category) => setCategory(category)}
        />

        <ExpenseList
          dark={dark}
          expenses={visibleExpenses}
          onDelete={(expenseId) =>
            setExpenses(expenses.filter((expense) => expense.id !== expenseId))
          }
        />
      </main>
    </div>
  );
};

export default App;
