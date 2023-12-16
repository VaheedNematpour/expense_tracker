interface Expense {
  id: number;
  description: string;
  category: string;
  amount: number;
}

interface Props {
  dark: boolean;
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete, dark }: Props) => {
  return (
    <div className="max-w-5xl mx-auto">
      <h2
        className={`font-bold my-4 ${
          dark ? "text-zinc-100" : "text-zinc-900"
        } xs:text-lg sm:text-xl lg:text-2xl`}
      >
        List of Expenses
      </h2>

      {expenses.length === 0 && (
        <p
          className={`text-red-500 xs:text-md sm:text-lg md:text-xl xl:text-2xl`}
        >
          No item found in your ExpenseList
        </p>
      )}

      {expenses.length !== 0 && (
        <table
          className={`${
            dark ? "text-zinc-100" : "text-zinc-900"
          } xs:text-xs xs:w-fit sm:text-md md:text-lg lg:text-xl`}
        >
          <thead className="uppercase">
            <tr>
              <th scope="col" className={`xs:p-2 sm:p-3 md:px-6 md:py-4`}>
                Description
              </th>
              <th scope="col" className={`xs:p-2 sm:p-3 md:px-6 md:py-4`}>
                Category
              </th>
              <th scope="col" className={`xs:p-2 sm:p-3 md:px-6 md:py-4`}>
                Amount
              </th>
              <th scope="col" className={`xs:p-2 sm:p-3 md:px-6 md:py-4`}></th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <td
                  scope="row"
                  className={`xs:px-3 xs:py-2 sm:px-4 sm:py-3 md:px-8 md:py-6`}
                >
                  {expense.description}
                </td>
                <td
                  className={`xs:px-3 xs:py-2 sm:px-4 sm:py-3 md:px-8 md:py-6`}
                >
                  {expense.category}
                </td>
                <td
                  className={`xs:px-3 xs:py-2 sm:px-4 sm:py-3 md:px-8 md:py-6`}
                >
                  {expense.amount}
                </td>
                <td
                  className={`xs:px-3 xs:py-2 sm:px-4 sm:py-3 md:px-8 md:py-6`}
                >
                  <button
                    className={`hover:text-red-500`}
                    onClick={() => onDelete(expense.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td
                className={`uppercase font-semibold xs:p-2 sm:p-3 sm:py-3 md:px-6 md:py-4`}
              >
                Total
              </td>
              <td className={`xs:p-2 sm:p-3 md:px-6 md:py-4`}>
                $
                {expenses
                  .reduce((acc, expense) => acc + expense.amount, 0)
                  .toFixed(2)}
              </td>
              <td
                className={`xs:px-3 xs:py-2 sm:px-4 sm:py-3 md:px-8 md:py-6`}
              ></td>
              <td
                className={`xs:px-3 xs:py-2 sm:px-4 sm:py-3 md:px-8 md:py-6`}
              ></td>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
};

export default ExpenseList;
