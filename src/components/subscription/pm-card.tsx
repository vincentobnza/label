import { CreditCard } from "lucide-react";
import { DotPatternCard } from "../patterns/dot-pattern";

type PaymentMethodCardProps = {
  type: string;
  active?: boolean;
};

export const PaymentMethodCard = ({
  type,
  active = false,
}: PaymentMethodCardProps) => {
  return (
    <div
      className={`relative w-full p-4
        border ${
          active
            ? "border-indigo-500 dark:border-indigo-600 ring-1 ring-indigo-500 dark:ring-indigo-400 bg-white dark:bg-indigo-900/20"
            : "border-slate-200 dark:border-slate-800 bg-white dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 "
        } 
        rounded-lg shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer relative`}
    >
      {active && (
        <div className="absolute -top-3 right-4 px-2 py-[1px] rounded text-xs font-bold bg-indigo-600 border border-indigo-300 dark:border-indigo-300 text-white z-10">
          Active
        </div>
      )}

      {active && <DotPatternCard />}

      <div className="flex items-center space-x-3">
        <CreditCard
          size={20}
          strokeWidth={2}
          className={`${
            active
              ? "text-indigo-500 dark:text-indigo-400"
              : "text-slate-600 dark:text-slate-400"
          }`}
        />
        <h3
          className={`text-sm font-medium ${
            active
              ? "text-indigo-700 dark:text-indigo-300"
              : "text-slate-800 dark:text-slate-200"
          }`}
        >
          {type}
        </h3>
      </div>
    </div>
  );
};
