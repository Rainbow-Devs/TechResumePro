import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { FormValues } from "../types/LoginFormTypes";



export const useLoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  const [loading, setLoading] = useState(false);
  const sleep = (ms: number | undefined) =>
    new Promise((resolve) => setTimeout(resolve, ms));
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    await sleep(2000);
    setLoading(true);
    console.log(JSON.stringify(data));
  };

  return {
    showPassword,
    togglePasswordVisibility,
    onSubmit,
    loading,
  };
};
