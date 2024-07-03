import React from "react";
import { Button, styled } from "@mui/material";
import MetamaskIcon from "@/assets/icons/MetamaskIcon";

const ButtonStyled = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(1, 2),
  borderRadius: theme.shape.borderRadius,
  textTransform: theme.typography.button.textTransform,
  fontWeight: theme.typography.button.fontWeight,
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const MetamaskButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <ButtonStyled onClick={onClick}>
    <MetamaskIcon />
  </ButtonStyled>
);

export default MetamaskButton;
