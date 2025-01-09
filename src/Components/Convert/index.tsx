import axios from "axios";
import React, { useEffect, useState } from "react";
import * as Styled from "./styles";

const CurrencyConverter: React.FC = () => {
  const [amount, setAmount] = useState<number>(1);
  const [fromCurrency, setFromCurrency] = useState<string>("USD");
  const [toCurrency, setToCurrency] = useState<string>("EUR");
  const [result, setResult] = useState<string | null>(null);
  const [currencies, setCurrencies] = useState<string[]>([]);

  useEffect(() => {
    axios
      .get("https://api.exchangerate-api.com/v4/latest/USD")
      .then((response) => {
        setCurrencies(Object.keys(response.data.rates));
      })
      .catch((error) => console.error(error));
  }, []);

  const convertCurrency = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
      );
      const rate = response.data.rates[toCurrency];
      const conversion = (amount * rate).toFixed(2);
      setResult(`${amount} ${fromCurrency} = ${conversion} ${toCurrency}`);
    } catch (error) {
      console.error(error);
      setResult("Erro ao converter a moeda.");
    }
  };

  return (
    <Styled.ConverterContainer>
      <Styled.Title>Conversor de Moedas</Styled.Title>
      <Styled.Form onSubmit={convertCurrency}>
        <Styled.Input
          type="number"
          value={amount}
          onChange={(e: { target: { value: unknown } }) =>
            setAmount(Number(e.target.value))
          }
          placeholder="Quantia"
        />
        <Styled.Select
          value={fromCurrency}
          onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
            setFromCurrency(e.target.value)
          }
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </Styled.Select>
        <Styled.Select
          value={toCurrency}
          onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
            setToCurrency(e.target.value)
          }
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </Styled.Select>
        <Styled.Button type="submit">Converter</Styled.Button>
      </Styled.Form>
      {result && <Styled.Result>{result}</Styled.Result>}
    </Styled.ConverterContainer>
  );
};

export default CurrencyConverter;
