export const InputNumber = ({ label = "", name = "", valor = "", evento }) => {

    const handleEvent = () => {
        evento
    }

  return (
    <>
      <label htmlFor="">{label}</label>
      <input type="number" name={name} value={valor} onChange={evento} />
      <br />
      <br />
    </>
  );
};
