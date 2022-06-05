import { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [info, setInfo] = useState({
    cardHolder: "",
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvc: "",
  });
  const handleChange = (e) =>
    setInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  return (
    <FormContext.Provider value={{ handleChange, info }}>
      {children}
    </FormContext.Provider>
  );
};
