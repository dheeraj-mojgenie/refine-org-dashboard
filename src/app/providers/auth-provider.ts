import { AuthProvider } from "@refinedev/core";

export const authProvider: AuthProvider = {
  login: async () => {
    return {
      success: true,
      redirectTo: "/",
    };
  },
  logout: async () => {
    return {
      success: true,
      redirectTo: "/login",
    };
  },
  check: async () => {
    return {
      authenticated: true,
    };
  },
  onError: async (error) => {
    console.error(error);
    return { error };
  },
  getIdentity: async () => {
    return {
      id: 1,
      name: "Demo User",
      avatar: "https://i.pravatar.cc/150?img=1",
    };
  },
};
