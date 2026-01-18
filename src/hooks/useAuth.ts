import { useContext } from "react";
import type { AuthContextType } from "../types/types";
import { AuthContext } from "../contexts/AuthContext";

export const useAuth = (): AuthContextType => {
  return useContext(AuthContext);
};