import { LucideIcon } from "lucide-react";

type ExploreCardProps = {
  label: string;
  description?: string;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  icon?: LucideIcon;
};

export function ExploreCard({
  label,
  bgColor,
  textColor,
  borderColor,
  description,
  icon: Icon,
}: ExploreCardProps) {
  return (
    <div
      className={`flex flex-col items-start justify-start p-4 px-5 border ${borderColor} rounded-lg hover:shadow-lg transition-shadow duration-300 bg-gradient-to-r ${bgColor} ${textColor} relative`}
    >
      {Icon && (
        <Icon
          className={`absolute top-3 right-3 w-9 h-9 opacity-10 ${textColor}`}
          strokeWidth={1.5}
        />
      )}
      <h3 className="text-md font-medium">{label}</h3>
      <p className="mt-3 opacity-50 text-xs">{description}</p>
    </div>
  );
}
