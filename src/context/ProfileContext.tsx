import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from "react";

export interface Profile {
  id: string;
  name: string;
  email: string;
  age?: number | null;
}

interface ProfileContextProps {
  profiles: Profile[];
  addProfile: (profile: Profile) => void;
  deleteProfile: (id: string) => void;
}

const ProfileContext = createContext<ProfileContextProps | undefined>(
  undefined
);

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error("useProfile must be used within a ProfileProvider");
  }
  return context;
};

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [profiles, setProfiles] = useState<Profile[]>([]);

  const addProfile = useCallback((profile: Profile) => {
    setProfiles((prevProfiles) => [...prevProfiles, profile]);
  }, []);

  const deleteProfile = useCallback((id: string) => {
    setProfiles((prev) => prev.filter((profile) => profile.id !== id));
  }, []);

  const contextValue = useMemo(
    () => ({
      profiles,
      addProfile,
      deleteProfile,
    }),
    [profiles, addProfile, deleteProfile]
  );

  return (
    <ProfileContext.Provider value={contextValue}>
      {children}
    </ProfileContext.Provider>
  );
};
