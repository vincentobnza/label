import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/auth-context";
import { Loading } from "@/components/shared/loading";
import { useEffect } from "react";

const ProtectedRoute = ({ children }: any) => {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      <Navigate to="/login" replace />;
    }
  }, [loading, user]);

  if (loading) {
    return <Loading />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
