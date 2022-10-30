import styled from '@emotion/styled';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { TbArrowLoopRight2 } from 'react-icons/tb';

export const Input = styled(TextField)`
  width: 300px;
  background-color: white;
  border-radius: 10px;
  &:invalid {
    animation: shake 0.3s;
    background-color: black;
  }
  @keyframes shake {
    25% {
      transform: translateX(4px);
    }
    50% {
      transform: translateX(-4px);
    }
    75% {
      transform: translateX(4px);
    }
  }
`;

export const StyledBtn = styled(Button)`
  background-color: #097799;
  color: #fff;

  padding: 10px 20px;

  &:hover {
    background-color: #14a6d9;
  }
`;

export const AppContainer = styled.div`
  display: flex;
  height: 70vh;
  position: relative;
  width: 100%;
  transition: cubic-bezier(0.1, 0.69, 0.83, 0.67);
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  background-color: #648ef9;
  border-radius: 10px;
  -webkit-box-shadow: 10px 10px 14px -1px rgba(0, 0, 0, 0.61);
  -moz-box-shadow: 10px 10px 14px -1px rgba(0, 0, 0, 0.61);
  box-shadow: 10px 10px 14px -1px rgba(0, 0, 0, 0.61);
  transition: all 500ms linear, transform 500ms ease-in-out;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 15px;
  @media screen and (max-width: 500px) {
    & {
      flex-direction: column;
    }
  }
  transition: all 500ms linear, transform 500ms ease-in-out;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 500ms linear, transform 500ms ease-in-out;

  @media screen and (max-width: 800px) {
    & {
      flex-direction: column;
      transition: all 500ms linear, transform 500ms ease-in-out;
    }
  }
`;

export const Code = styled.div`
  width: 250px;
  background-color: #648ef9;
  border-radius: 10px;

  &:hover {
    scale: 1.01;
  }
`;

export const CodeDescription = styled.div`
  display: flex;
  justify-content: center;
  width: 280px;

  position: absolute;
  top: 300px;

  padding: 0 10px 5px 10px;
  border-radius: 10px;

  color: black;
  background-color: white;
  text-align: center;
  -webkit-box-shadow: 10px 10px 14px -1px rgba(0, 0, 0, 0.61);
  -moz-box-shadow: 10px 10px 14px -1px rgba(0, 0, 0, 0.61);
  box-shadow: 10px 10px 14px -1px rgba(0, 0, 0, 0.61);

  @media screen and (max-width: 800px) {
    top: 425px;
  }

  @media screen and (max-width: 500px) {
    top: 480px;
  }
`;

export const Arrow = styled(TbArrowLoopRight2)`
  position: relative;
  top: 5px;
  transform: rotate(-90deg);
`;
