"use client";
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext<any>("");

export function AppWrapper({ children }: { children: React.ReactNode }) {
  let [dark, changeTheme] = useState(false);

  return (
    <AppContext.Provider
      value={{
        dark,
        changeTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
