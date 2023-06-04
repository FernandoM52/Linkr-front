import React from "react";

export const AuthContext = React.createContext({});

export function AuthProvider(props) {
    const [user, setUser] = React.useState(
      JSON.parse(localStorage.getItem('userSessionInfoLinkr')) || {}
    );
  
    return (
      <AuthContext.Provider value={{ user, setUser }}>
        {props.children}
      </AuthContext.Provider>
    );
  }
  