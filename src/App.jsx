import { useState } from "react";
import "./App.css";

function App() {
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [imc, setImc] = useState(0);
  const [classe, setClasse] = useState("");

  const calcularIMC = () => {
    const alturaNumerica = parseFloat(altura);
    const pesoNumerico = parseFloat(peso);

    if (alturaNumerica > 0 && pesoNumerico > 0) {
      const novoIMC = pesoNumerico / (alturaNumerica * alturaNumerica);
      setImc(novoIMC.toFixed(2)); // Define o IMC com 2 casas decimais

      if (novoIMC < 18.5) {
        setClasse("Abaixo do peso");
      } else if (novoIMC >= 18.5 && novoIMC <= 24.9) {
        setClasse("Peso normal");
      } else if (novoIMC >= 25 && novoIMC <= 29.9) {
        setClasse("Sobrepeso");
      } else {
        setClasse("Obesidade");
      }
    } else {
      setImc(0);
      setClasse("Por favor, insira valores válidos.");
    }
  };

  return (
    <>
      <form>
        <input
          type="number"
          step="0.01"
          placeholder="Insira a altura"
          onChange={(e) => setAltura(e.target.value)}
        />
        <label> m</label>
        <br />
        <input
          type="number"
          step="0.1"
          placeholder="Insira o peso"
          onChange={(e) => setPeso(e.target.value)}
        />
        <label> kg</label>
        <br />
        <button type="button" onClick={calcularIMC}>
          Calcular IMC
        </button>
        <br />
        <label>IMC: {imc}</label>
        <div>Classificação: {classe}</div>
      </form>
    </>
  );
}

export default App;
