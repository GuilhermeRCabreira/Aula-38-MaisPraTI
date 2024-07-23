import { useState } from "react";

function StdForm() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Nome: ${name}`);
  };

  return (
    <form action="">
      <label>
        Nome:
        <input type="text" value={name} onChange={handleChange} />
      </label>
      `<button type="submit">Enviar</button>`
    </form>
  );
}

export default StdForm;
