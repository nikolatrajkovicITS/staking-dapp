import { Box, styled } from "@mui/material";

const InfoBox = styled(Box)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.background.default} 30%, ${theme.palette.background.paper} 100%)`,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(3),
  boxShadow: theme.shadows[3],
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
}));

export default InfoBox;
