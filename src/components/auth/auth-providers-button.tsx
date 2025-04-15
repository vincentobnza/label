import { Button } from "../ui/button";

export const AuthProvidersButton = () => {
  return (
    <div className="w-full mt-3 grid grid-row-2 gap-2">
      <Button
        className="w-full h-10 text-slate-600 dark:text-slate-300"
        variant="outline"
      >
        Sign up with Google
      </Button>
      <Button
        className="w-full h-10 text-slate-600 dark:text-slate-300"
        variant="outline"
      >
        Sign up with Github
      </Button>
    </div>
  );
};
