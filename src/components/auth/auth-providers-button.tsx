import { useAuth } from "@/context/auth-context";
import { Button } from "../ui/button";
import { FaGithubAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
export const AuthProvidersButton = () => {
  const { signInWithGoogle } = useAuth();
  return (
    <div className="w-full mt-3 grid grid-row-2 gap-2">
      <Button
        onClick={signInWithGoogle}
        className="w-full h-10 text-slate-600 dark:text-slate-300"
        variant="outline"
      >
        <FcGoogle className="mr-2" size={20} />
        Sign up with Google
      </Button>
      <Button
        className="w-full h-10 text-slate-600 dark:text-slate-300"
        variant="outline"
      >
        <FaGithubAlt className="mr-2" size={20} />
        Sign up with Github
      </Button>
    </div>
  );
};
