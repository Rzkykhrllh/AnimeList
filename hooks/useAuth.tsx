import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User as TUser,
} from "firebase/auth";

import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { auth } from "../firebase";

type Props = {
  children: React.ReactNode;
};

type TAuth = {
  user: TUser | null;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  logOut: () => Promise<void>;
  error: string | null;
  loading: boolean;
};

const AuthContext = createContext<TAuth>({
  user: null,
  signUp: async () => {},
  signIn: async () => {},
  logOut: async () => {},
  error: null,
  loading: false,
});

// Auth Context Provider
export const AuthProvider = (props: Props) => {
  const { children } = props;

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<TUser | null>(null);
  const [error, setError] = useState(null);
  const [initialLoading, setinItialLoading] = useState(false);
  const router = useRouter();

  // Persisting the user, kalau gada orang
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // Logged in
        setUser(user);
        setLoading(false);
      } else {
        // not logged in
        setUser(null);
        setLoading(true);
        router.push("/login");
      }

      setinItialLoading(false);
    });
  }, [auth]);

  const signUp = async (email: string, password: string) => {
    setLoading(true);

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        router.push("/");
        setLoading(false);
      })
      .catch((error) => alert(error.message))
      .finally(() => setLoading(false));
  };

  const signIn = async (email: string, password: string) => {
    setLoading(true);

    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUser(userCredential.user);
        router.push("/");
        setLoading(false);
      })
      .catch((error) => alert(error.message))
      .finally(() => setLoading(false));
  };

  const logOut = async () => {
    setLoading(true);

    signOut(auth)
      .then(() => setUser(null))
      .catch((error) => alert(error.message))
      .finally(() => setLoading(false));
  };

  const memoedValue = useMemo(
    () => ({
      user,
      signUp,
      signIn,
      error,
      loading,
      logOut,
    }),
    [user, error, loading]
  );

  return (
    <AuthContext.Provider value={memoedValue}>
      {!initialLoading && children}
    </AuthContext.Provider>
  );
};

// export default AuthProvider - Custom Hooks
export default function useAuth() {
  return useContext(AuthContext);
}
