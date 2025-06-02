import { createContext, useContext, useEffect, useState } from "react";
import { authRefresh } from "../service/authService";

export const UserContext = createContext(undefined);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a RoomProvider");
  }
  return context;
};

export function UserProvider({ children }) {
  const [userData, setUserData] = useState();

  const handleUser = (userToSave) => {
    if (!userToSave) {
      setUserData(null);
      return;
    }
    setUserData({ email: userToSave.email, username: userToSave.username });
  };

  useEffect(() => {
    const hadleRefresh = async () => {
      const userResponse = await authRefresh();
      if (userResponse.error) return;
      handleUser({
        correo: userResponse.data.user.correo,
        username: userResponse.data.user.username,
      });
    };
    hadleRefresh();
  }, []);

  return (
    <UserContext.Provider value={{ handleUser, userData }}>
      {children}
    </UserContext.Provider>
  );
}
