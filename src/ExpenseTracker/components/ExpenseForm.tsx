import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import categories from "../ExpenseFilter";

const schema = z.object({
  description: z.string().min(3, {
    message: "The description length must be at least 3 characters!",
  }),
  amount: z.number({ invalid_type_error: "The amount field is required!" }),
  category: z.enum(categories),
});

type ExpenseFormData = z.infer<typeof schema>;

interface Props {
  dark: boolean;
  onSubmit: (data: ExpenseFormData) => void;
}

const ExpenseForm = ({ dark, onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({
    resolver: zodResolver(schema),
  });
  return (
    <div className="max-w-5xl mx-auto">
      <h2
        className={`my-4 font-bold ${
          dark ? "text-zinc-100" : "text-zinc-900"
        } xs:text-lg sm:text-xl xl:text-2xl`}
      >
        Add your Expenses
      </h2>

      <form
        className={`border-2 rounded-md shadow-md flex flex-col px-4 py-2 space-y-2 md:py-3`}
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}
      >
        <div className="flex flex-col space-y-1">
          <label
            className={`text-md ${
              dark ? "text-zinc-100" : "text-zinc-900"
            } lg:text-xl`}
            htmlFor="description"
          >
            Description
          </label>
          <input
            className={`px-4 py-2 bg-zinc-200 text-gray-900 rounded-sm`}
            {...register("description")}
            type="text"
            id="description"
          />
          {errors.description && (
            <p className={`text-red-500 xs:text-text-md md:text-lg`}>
              {errors.description.message}
            </p>
          )}
        </div>

        <div className="flex flex-col space-y-1">
          <label
            className={`text-md ${
              dark ? "text-zinc-100" : "text-zinc-900"
            } lg:text-xl`}
            htmlFor="amount"
          >
            Amount
          </label>
          <input
            className={`px-4 py-2 bg-zinc-200 text-gray-900 rounded-sm`}
            {...register("amount", { valueAsNumber: true })}
            type="text"
            id="amount"
          />
          {errors.amount && (
            <p className={`text-red-500 xs:text-text-md md:text-lg`}>
              {errors.amount.message}
            </p>
          )}
        </div>

        <div className="flex flex-col space-y-1">
          <label
            className={`text-md ${
              dark ? "text-zinc-100" : "text-zinc-900"
            } lg:text-xl`}
            htmlFor="category"
          >
            Category
          </label>
          <select
            className={`px-4 py-2 bg-zinc-200 text-gray-900 rounded-sm`}
            {...register("category")}
            id="category"
          >
            <option value=""></option>
            {categories.map((category) => (
              <option key={category}>{category}</option>
            ))}
          </select>
          {errors.category && (
            <p className={`text-red-500 xs:text-text-md md:text-lg`}>
              {errors.category.message}
            </p>
          )}
        </div>

        <button
          className={`border-2 border-zinc-500 px-4 py-2
          rounded-md hover:bg-zinc-500 hover:text-zinc-200 ${
            dark && "text-zinc-100"
          }`}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
