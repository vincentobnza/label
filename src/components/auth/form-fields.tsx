import { LucideIcon } from "lucide-react";
import { Input } from "../ui/input";

type FormFieldProps = {
  label: string;
  id: string;
  placeholder: string;
  icon: LucideIcon;
};

export const FormField = ({
  label,
  id,
  placeholder,
  icon: Icon,
}: FormFieldProps) => (
  <div className="flex flex-col gap-2">
    <label
      htmlFor={id}
      className="opacity-80 text-sm font-medium dark:text-gray-300"
    >
      {label}
    </label>
    <div className="relative w-full">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400">
        {Icon && <Icon className="w-4 h-4" />}
      </div>
      <Input
        autoComplete="off"
        id={id}
        placeholder={placeholder}
        className="pl-10 w-full dark:bg-gray-800 dark:text-white dark:border-gray-700 placeholder:text-[13px]"
      />
    </div>
  </div>
);
