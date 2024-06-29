import React from "react";
import { Button, styled } from "@mui/material";
import MetamaskIcon from "@/assets/icons/MetamaskIcon";

const ButtonStyled = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.warning.dark,
  color: theme.palette.text.primary,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(1, 2),
  borderRadius: theme.shape.borderRadius,
  textTransform: theme.typography.button.textTransform,
  fontWeight: theme.typography.button.fontWeight,
}));

const MetamaskButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <ButtonStyled onClick={onClick}>
    <MetamaskIcon />
  </ButtonStyled>
);

export default MetamaskButton;
