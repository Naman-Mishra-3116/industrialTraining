import { createContext, useContext, useReducer, useEffect } from "react";

const initialState = {
  user:
    localStorage.getItem("user") !== undefined
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  role: localStorage.getItem("role") || null,
  token: localStorage.getItem("token") || null,
};

const authContext = createContext(initialState);

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        role: null,
        token: null,
      };

    case "LOGIN_SUCCESS":
      return {
        user: action.payload.user,
        role: action.payload.role,
        token: action.payload.token,
      };

    case "LOGOUT":
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("role");
      return {
        user: null,
        role: null,
        token: null,
      };

    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
    localStorage.setItem("token", state.token);
    localStorage.setItem("role", state.role);
  }, [state]);
  return (
    <authContext.Provider
      value={{
        user: state.user,
        role: state.role,
        token: state.token,
        dispatch,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export const useAuthHook = () => {
  return useContext(authContext);
};
