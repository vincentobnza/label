import { Session, User as SupabaseUser } from "@supabase/supabase-js";

export type AuthContextType = {
  user: SupabaseUser | null;
  session: Session | null;
  loading: boolean;
  error: string | null;
};

export type AuthProviderProps = {
  children: React.ReactNode;
};
