import styled from "styled-components";

export const ConverterContainer = styled.div`
  background: linear-gradient(145deg, #2a2a2a, #1a1a1a);
  color: #ffffff;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  width: 100%;
  max-width: 420px;
  margin: 50px auto;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

export const Title = styled.h1`
  font-size: 26px;
  text-align: center;
  margin-bottom: 20px;
  color: #e0e0e0;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
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

  &:focus {
    border: 2px solid #5c67ff;
  }
`;

export const Button = styled.button`
  padding: 12px;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
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
`;
