import axios from "axios";
import { InputNumber } from "../components";
import { useForm } from "../hooks";

const formData = { numero: "", baseInicial: "", baseFinal: "" };

export const Conversion = () => {
  const { numero, baseInicial, baseFinal, onInputChange } = useForm(formData);

  const onSubmit = async (event) => {
    event.preventDefault();
    const res = await axios.post(`${import.meta.env}cbase`,{ "_num":parseInt(numero), "_numFrom":baseInicial, "_numTo":baseFinal })
    alert(res);
  };

  return (
    <>
      <p>Hola Mundo</p>
      <p>I'm GEPPETTO!</p>

      <form onSubmit={onSubmit}>
        <label htmlFor="numero">Valor a Convertir: </label>
        <input name="numero" value={numero} onChange={onInputChange} required />
        <br />
        <br />
        <label htmlFor="baseInicial">Base Inicial: </label>
        <input
          name="baseInicial"
          value={baseInicial}
          onChange={onInputChange}
        />
        <br />
        <br />

        <label htmlFor="baseFinal">Base Final: </label>
        <input
          name="baseFinal"
          value={baseFinal}
          onChange={onInputChange}
          required
        />

        {/* <InputNumber
          label="Numero A Convertir"
          name="numero"
          value={numero}
          evento={onInputChange}
          required
        /> */}
        {/* <InputNumber
          label="Base Inicial"
          name="baseInicial"
          value={baseInicial}
          onChange={onInputChange}
          required
        />
        <InputNumber
          label="Base FInal"
          name="baseFinal"
          value={baseFinal}
          onChange={onInputChange}
          required
        /> */}

        <button>Guardar</button>
      </form>
    </>
  );
};
