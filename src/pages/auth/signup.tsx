import { Button } from "@/components/ui/button";
import { User } from "lucide-react"; // Import icons
import { FormField } from "@/components/auth/form-fields";
import { AuthHeader } from "@/components/auth/header";
import { AuthProvidersButton } from "@/components/auth/auth-providers-button";

const HeroSection = () => (
  <div className="flex flex-col justify-center h-full p-8">
    <h1 className="text-5xl font-medium mb-6 logo-font">
      Welcome to{" "}
      <span className="bg-gradient-to-b from-indigo-400 to-violet-700 bg-clip-text text-transparent pr-2 logo-font">
        Label
      </span>
    </h1>
    <p className="text-lg font-medium mb-6 opacity-70">
      Connect, share, and discover with our community. Join thousands of users
      already enjoying Label.
    </p>
    <div className="mt-10 w-3/4 bg-slate-700/30 p-4 rounded-lg backdrop-blur-sm">
      <p className="italic text-white/90">
        "Label has transformed how I connect with like-minded individuals. The
        platform is intuitive and engaging!"
      </p>
      <p className="mt-6 font-semibold opacity-50">— Sarah Johnson</p>
    </div>
  </div>
);

const SignupForm = () => (
  <form className="w-full space-y-3">
    <FormField
      label="Username"
      id="username"
      placeholder="Enter your username"
      icon={User}
    />
    <Button className="w-full bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700">
      Create Account
    </Button>

    <div className="my-5 text-center text-sm  opacity-70">
      <p className="relative before:absolute before:w-16 before:h-px before:bg-slate-600 before:dark:bg-slate-700 before:left-0 before:top-1/2 after:absolute after:w-16 after:h-px after:bg-slate-600 after:dark:bg-slate-700 after:right-0 after:top-1/2">
        Or continue with
      </p>
    </div>
  </form>
);

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="w-full mx-auto flex">
        <div className="hidden md:block md:w-3/4">
          <HeroSection />
        </div>
        <div className="w-full md:w-1/2 bg-white dark:bg-slate-800/20 border border-slate-200 dark:border-slate-800 p-9 rounded-2xl">
          <AuthHeader
            title="Create an Account"
            subtitle="Already have an account?"
            link="login"
            link_text="Sign in"
          />
          <SignupForm />
          <AuthProvidersButton />
        </div>
      </div>
    </div>
  );
};

export default Signup;
