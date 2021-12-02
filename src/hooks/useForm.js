import { useState } from "react";

export default function useForm(callback) {
  const [values, setValues] = useState({});

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    callback(values);
  };

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
  };
}
