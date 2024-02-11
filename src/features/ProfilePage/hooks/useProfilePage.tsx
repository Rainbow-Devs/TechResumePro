import { ChangeEvent, useState } from "react";

interface UserProfile {
  name: string;
  email: string;
  profilePicture: string | null;
  headline: string;
  bio: string;
}

export const useProfilePage = () => {
  const [editMode, setEditMode] = useState(false);

  // TODO placeholder user info, replace after connecting w/ backend
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // TODO Add logic to save changes to the backend
    setEditMode(false);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  // TODO placeholder user info, replace after connecting w/ backend
  const [user, setUser] = useState<UserProfile>({
    name: "Abigail Dawson",
    email: "abigaildawson.dev@gmail.com",
    profilePicture: null,
    headline: "Software Engineer",
    bio: "Passionate about education and languages, and excited about making a positive impact on others through high quality software solutions.",
  });

  return {
    user,
    handleChange,
    handleSubmit,
    editMode,
    setEditMode,
  };
};
