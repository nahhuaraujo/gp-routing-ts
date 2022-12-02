import { useState } from 'react';

export const useForm = (initialFormValues: any) => {
  const [formValues, setFormValues] = useState(initialFormValues);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  return { formValues, changeHandler };
};
