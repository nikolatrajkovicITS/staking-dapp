import { Card, styled } from "@mui/material";
import colors from "@/themes/colors";

const BalanceOverviewCard = styled(Card)(({ theme }) => ({
  background: colors.darkGradientBackground,
  color: theme.palette.text.primary,
  borderRadius: theme.shape.borderRadius,
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
  marginBottom: theme.spacing(2),
  minWidth: 275,
  minHeight: 320,
  "&:hover": {
    boxShadow: `0 6px 30px ${theme.palette.primary.main}`,
  },
}));

export default BalanceOverviewCard;
