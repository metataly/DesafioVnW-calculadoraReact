import { useState } from "react";
import "./Style.scss";

export default function App() {
  const [num1, setNum1] = useState();
  const [num2, setNum2] = useState();
  const [resultado, setResultado] = useState(null);

  const PrimeiroValor = (e) => {
    setNum1(e.target.value);
  };

  const SegundoValor = (e) => {
    setNum2(e.target.value);
  };

  const soma = () => {
    if (num1 && num2) {
      setResultado(Number(num1) + Number(num2));
    } else {
      setResultado("Preencha ambos os campos");
    }
  };

  const subtracao = () => {
    if (num1 && num2) {
      setResultado(Number(num1) - Number(num2));
    } else {
      setResultado("Preencha ambos os campos");
    }
  };

  const multiplicacao = () => {
    if (num1 && num2) {
      setResultado(Number(num1) * Number(num2));
    } else {
      setResultado("Preencha ambos os campos");
    }
  };

  const divisao = () => {
    if (num1 && num2) {
      if (num2 === "0") {
        setResultado("Não é possível dividir por zero");
      } else {
        setResultado(Number(num1) / Number(num2));
      }
    } else {
      setResultado("Preencha ambos os campos");
    }
  };

  const limpar = () => {
    setNum1("");
    setNum2("");
    setResultado(null);
  };

  return (
    <main>
      <section>
        <h1>Calculadora</h1>
        <input
          type="number"
          placeholder="Insira um número"
          value={num1}
          onChange={PrimeiroValor}
        />
        <input
          type="number"
          placeholder="Insira um número"
          value={num2}
          onChange={SegundoValor}
        />
        <div>
          <button onClick={soma}>+</button>
          <button onClick={subtracao}>-</button>
          <button onClick={multiplicacao}>x</button>
          <button onClick={divisao}>/</button>
          <button onClick={limpar}>C</button>
        </div>
        {resultado !== null && <h4>{resultado}</h4>}
      </section>
    </main>
  );
}
