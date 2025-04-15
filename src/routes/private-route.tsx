import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/auth-context";
import { Loading } from "@/components/shared/loading";
import { useState, useEffect } from "react";

const ProtectedRoute = ({ children }: any) => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!user) {
    return <Navigate to="/auth/login" />;
  }
  if (loading) {
    return <Loading />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
