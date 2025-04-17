import { Link } from "react-router-dom";

type AuthHeaderProps = {
  title?: string;
  subtitle?: string;
  link?: string;
  link_text?: string;
};

export const AuthHeader = ({
  title,
  subtitle,
  link,
  link_text,
}: AuthHeaderProps) => {
  return (
    <div className="mb-8 text-center">
      <h1 className="text-3xl font-semibold  mb-2 dark:text-white">{title}</h1>
      <p className="opacity-70 dark:text-gray-300 text-sm">
        {subtitle}
        <Link
          to={`/auth/${link}`}
          className="ml-1 text-indigo-500 dark:text-indigo-300 underline font-medium"
        >
          {link_text}
        </Link>
      </p>
    </div>
  );
};
