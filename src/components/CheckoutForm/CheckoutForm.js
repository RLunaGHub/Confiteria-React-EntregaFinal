import './CheckoutForm.css';
import "../../App.css";
import { useState, useEffect } from "react";



const CheckoutForm = ({ onConfirm }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isValid =
      name !== "" &&
      surname !== "" &&
      phone !== "" &&
      email !== "" &&
      email === confirmEmail;
    setIsFormValid(isValid);
  }, [name, surname, phone, email, confirmEmail]);

  const handleConfirm = (event) => {
    event.preventDefault();

    const userData = {
      name,
      surname,
      phone,
      email,
      confirmEmail,
    };

    onConfirm(userData);
  };

  return (
    <div className="Container">
      <form onSubmit={handleConfirm} className="Form">
        <label className="Label">
          Nombre:
          <input
            className="Input"
            type="text"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </label>
        <label className="Label">
          Apellido:
          <input
            className="Input"
            type="text"
            value={surname}
            onChange={({ target }) => setSurname(target.value)}
          />
        </label>
        <label className="Label">
          Teléfono:
          <input
            className="Input"
            type="text"
            value={phone}
            onChange={({ target }) => setPhone(target.value)}
          />
        </label>
        <label className="Label">
          Correo Electrónico:
          <input
            className="Input"
            type="text"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </label>
        <label className="Label">
          Confirme su correo electrónico:
          <input
            className="Input"
            type="text"
            value={confirmEmail}
            onChange={({ target }) => setConfirmEmail(target.value)}
          />
        </label>
        <div className="Label">
          <button 
            type="submit"
            className={`ButtonCheckOut ${isFormValid ? "Active" : ""}`}
            disabled={!isFormValid}
          >
            Confirmar su compra
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
