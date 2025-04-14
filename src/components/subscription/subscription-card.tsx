import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Check } from "lucide-react";
import { DotPatternCard } from "../patterns/dot-pattern";

type SubscriptionCardProps = {
  title: string;
  description: string;
  price: string;
  period?: string;
  features: string[];
  buttonText?: string;
  buttonVariant?: "default" | "outline" | "secondary" | "destructive";
  learnMoreLink?: string;
  popular?: boolean;
  currentPlan?: boolean;
};

export const SubscriptionCard = ({
  title,
  description,
  price,
  period = "month",
  features,
  buttonText,
  buttonVariant = "default",
  learnMoreLink,
  popular = false,
  currentPlan = false,
}: SubscriptionCardProps) => {
  return (
    <div
      className={`relative w-full h-auto p-6 rounded flex flex-col
        ${
          popular
            ? "bg-white dark:bg-gradient-to-br dark:from-slate-900 dark:to-indigo-950 border-2 border-indigo-200 dark:border-indigo-900 shadow-md"
            : "bg-white dark:bg-gradient-to-br dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 shadow-sm"
        }`}
    >
      {(popular || currentPlan) && <DotPatternCard />}
      {popular && (
        <div className="absolute -top-3 right-6 bg-indigo-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          Recommended
        </div>
      )}

      {currentPlan && (
        <div className="absolute -top-3 left-6 bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
          Current Plan
        </div>
      )}

      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <h3
            className={`text-lg font-bold ${
              popular ? "text-indigo-700 dark:text-indigo-400" : ""
            }`}
          >
            {title}
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-xs">
            {description}
          </p>
        </div>
        <div className="mt-3">
          <span
            className={`text-3xl font-extrabold ${
              popular
                ? "text-indigo-700 dark:text-indigo-400"
                : "text-slate-800 dark:text-slate-200"
            }`}
          >
            {price}
          </span>
          <span className="text-slate-500 dark:text-slate-400 text-sm ml-1">
            /{period}
          </span>
        </div>
      </div>

      <div className="flex-1 mb-6">
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center justify-start">
              <Check
                strokeWidth={3}
                className={`w-4 h-4  mr-2 flex-shrink-0 ${
                  popular
                    ? "text-indigo-500 dark:text-indigo-400"
                    : "text-emerald-500 dark:text-emerald-400"
                }`}
              />
              <span className="text-sm text-slate-700 dark:text-slate-300">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-5 border-t border-slate-100 dark:border-slate-700">
        <Button
          className={`w-full ${
            popular ? "bg-indigo-600 hover:bg-indigo-700 text-white" : ""
          }`}
          variant={buttonVariant}
          size="lg"
        >
          {buttonText || "Select Plan"}
        </Button>

        {learnMoreLink && (
          <Link
            to={learnMoreLink}
            className="text-sm text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 hover:underline text-center block mt-3"
          >
            Learn more about this plan
          </Link>
        )}
      </div>
    </div>
  );
};
