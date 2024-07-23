import { useState } from "react";

function Form2() {
  const [address, setAddress] = useState({
    street: "",
    city: "",
    postalCode: "",
  });

  const [errors, setErrors] = useState({
    street: "",
    city: "",
    postalCode: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAddress({
      ...address,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: value ? "" : "Este campo é obrigatório.",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {
      street: address.street ? "" : "Este campo é obrigatório.",
      city: address.city ? "" : "Este campo é obrigatório.",
      postalCode: address.postalCode ? "" : "Este campo é obrigatório.",
    };

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error !== "");

    if (!hasErrors) {
      alert(`Endereço: ${JSON.stringify(address)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Rua:{" "}
        <input
          type="text"
          name="street"
          value={address.street}
          onChange={handleChange}
        />
        {errors.street && <span style={{ color: "red" }}>{errors.street}</span>}
      </label>
      <br />
      <label>
        Cidade:{" "}
        <input
          type="text"
          name="city"
          value={address.city}
          onChange={handleChange}
        />
        {errors.city && <span style={{ color: "red" }}>{errors.city}</span>}
      </label>
      <br />
      <label>
        CEP:{" "}
        <input
          type="text"
          name="postalCode"
          value={address.postalCode}
          onChange={handleChange}
        />
        {errors.postalCode && (
          <span style={{ color: "red" }}>{errors.postalCode}</span>
        )}
      </label>
      <br />
      <button>Enviar</button>
    </form>
  );
}

export default Form2;
