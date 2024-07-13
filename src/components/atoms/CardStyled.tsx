import { Card, styled } from "@mui/material";

const CardStyled = styled(Card)(({ theme }) => ({
  background: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
  overflow: "hidden",
}));

export default CardStyled;
