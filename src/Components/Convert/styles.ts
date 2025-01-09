import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    background: linear-gradient(135deg, #121212, #1e1e1e);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }
`;

export const ConverterContainer = styled.div`
  background: linear-gradient(145deg, #2a2a2a, #1a1a1a);
  color: #fff;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  width: 100%;
  max-width: 420px;
  margin: 50px auto;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    margin: 30px auto;
    padding: 20px;
  }

  @media (max-width: 480px) {
    margin: 20px auto;
    padding: 15px;
  }

  @media (max-width: 227px) {
    margin: 10px auto;
    padding: 10px;
    max-width: 200px;
  }

  @media (max-width: 197px) {
    margin: 5px auto;
    padding: 8px;
    max-width: 180px;
  }

  @media (max-width: 162px) {
    margin: 3px auto;
    padding: 5px;
    max-width: 160px;
  }
`;

export const Title = styled.h1`
  font-size: 26px;
  text-align: center;
  margin-bottom: 20px;
  color: #fff;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }

  @media (max-width: 227px) {
    font-size: 16px;
  }

  @media (max-width: 197px) {
    font-size: 14px;
  }

  @media (max-width: 162px) {
    font-size: 12px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }

  @media (max-width: 227px) {
    gap: 8px;
  }

  @media (max-width: 197px) {
    gap: 5px;
  }

  @media (max-width: 162px) {
    gap: 3px;
  }
`;

export const Input = styled.input`
  padding: 12px;
  font-size: 16px;
  border: 2px solid transparent;
  border-radius: 8px;
  background: linear-gradient(145deg, #333, #444);
  color: #ffffff;
  outline: none;
  transition: border 0.3s ease;

  &:focus {
    border: 2px solid #5c67ff;
  }

  @media (max-width: 480px) {
    padding: 10px;
    font-size: 14px;
  }

  @media (max-width: 227px) {
    padding: 8px;
    font-size: 12px;
  }

  @media (max-width: 197px) {
    padding: 6px;
    font-size: 10px;
  }

  @media (max-width: 162px) {
    padding: 4px;
    font-size: 8px;
  }
`;
export const Select = styled.select`
  padding: 12px;
  font-size: 16px;
  border: 2px solid transparent;
  border-radius: 8px;
  background: linear-gradient(145deg, #333, #444);
  color: #ffffff;
  outline: none;
  transition: border 0.3s ease;

  @media (max-width: 480px) {
    padding: 10px;
    font-size: 14px;
  }

  @media (max-width: 227px) {
    padding: 8px;
    font-size: 12px;
  }

  @media (max-width: 197px) {
    padding: 6px;
    font-size: 10px;
  }

  @media (max-width: 162px) {
    padding: 4px;
    font-size: 8px;
  }
`;

export const Button = styled.button`
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(135deg, #5c67ff, #3b45cc);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease, background 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    background: linear-gradient(135deg, #3b45cc, #5c67ff);
  }

  &:active {
    transform: translateY(0);
    box-shadow: inset 0px 3px 6px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 480px) {
    padding: 10px;
    font-size: 14px;
  }

  @media (max-width: 227px) {
    padding: 8px;
    font-size: 12px;
  }

  @media (max-width: 197px) {
    padding: 6px;
    font-size: 10px;
  }

  @media (max-width: 162px) {
    padding: 4px;
    font-size: 8px;
  }
`;

export const Result = styled.div`
  margin-top: 25px;
  font-size: 20px;
  text-align: center;
  color: #d1d1d1;
  background: linear-gradient(145deg, #222, #333);
  padding: 15px;
  border-radius: 8px;
  box-shadow: inset 0px 3px 6px rgba(0, 0, 0, 0.5);

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 10px;
  }

  @media (max-width: 227px) {
    font-size: 14px;
    padding: 8px;
  }

  @media (max-width: 197px) {
    font-size: 12px;
    padding: 6px;
  }

  @media (max-width: 162px) {
    font-size: 10px;
    padding: 4px;
  }
`;
