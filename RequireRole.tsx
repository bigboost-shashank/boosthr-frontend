import { useAuth } from "@/context/AuthContext";

export default function RequireRole({ role, children }: any) {
  const user = useAuth();
  if (!user || user.role !== role) return null;
  return children;
}
