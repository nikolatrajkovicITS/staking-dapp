import { styled, LinearProgress } from "@mui/material";

const LoadingBar = styled(LinearProgress)(({ theme }) => ({
  marginTop: theme.spacing(2),
  height: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
}));

export default LoadingBar;
