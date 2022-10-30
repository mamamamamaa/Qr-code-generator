import styled from "@emotion/styled";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

export const Input = styled(TextField)`
  width: 300px;
  background-color: white;
  border-radius: 10px;
`;

export const StyledBtn = styled(Button)`
  background-color: #097799;
  color: #fff;

  padding: 10px 20px;

  &:hover {
    background-color: #14a6d9;
  }
  margin-left: 20px;
`;
