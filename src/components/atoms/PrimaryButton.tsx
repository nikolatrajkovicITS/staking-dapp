"use client";

import { Button, styled } from "@mui/material";

const PrimaryButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  borderRadius: theme.shape.borderRadius,
  margin: theme.spacing(1),
  animation: "fadeIn 1.6s ease-in-out",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export default PrimaryButton;
