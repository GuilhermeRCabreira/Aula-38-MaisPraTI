import { useState } from "react";

function Desafio() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateUser = () => {
    const newErrors = {
      name: user.name ? "" : "Este campo é obrigatório.",
      email: user.email
        ? validateEmail(user.email)
          ? ""
          : "Formato de email inválido."
        : "Este campo é obrigatório.",
      password: user.password
        ? user.password.length >= 8
          ? ""
          : "A senha deve ter no mínimo 8 caracteres."
        : "Este campo é obrigatório.",
      passwordConfirmation: user.passwordConfirmation
        ? user.passwordConfirmation === user.password
          ? ""
          : "As senhas não coincidem."
        : "Este campo é obrigatório.",
    };

    setErrors(newErrors);

    return !Object.values(newErrors).some((error) => error !== "");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });

    // Validação imediata
    setErrors({
      ...errors,
      [name]: value ? "" : "Este campo é obrigatório.",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateUser()) {
      alert(
        "Formulário enviado com sucesso!",
        `Usuário: ${JSON.stringify(user)}`
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome Completo:{" "}
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
        />
        <br />
        {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
      </label>
      <br />
      <label>
        Email:{" "}
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <br />
        {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
      </label>
      <br />
      <label>
        Senha:{" "}
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        <br />
        {errors.password && (
          <span style={{ color: "red" }}>{errors.password}</span>
        )}
      </label>
      <br />
      <label>
        Confirmação de senha:{" "}
        <input
          type="password"
          name="passwordConfirmation"
          value={user.passwordConfirmation}
          onChange={handleChange}
        />
        <br />
        {errors.passwordConfirmation && (
          <span style={{ color: "red" }}>{errors.passwordConfirmation}</span>
        )}
      </label>
      <br />
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default Desafio;
