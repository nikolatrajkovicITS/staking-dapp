import React from "react";
import { Box, Typography, styled } from "@mui/material";

const InfoItemContainer = styled(Box)(({ theme }) => ({
  margin: theme.spacing(1, 0),
  color: theme.palette.text.primary,
  display: "flex",
  alignItems: "center",
  "& svg": {
    marginRight: theme.spacing(1),
  },
}));

const InfoText = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  color: theme.palette.text.primary,
}));

interface InfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string | number | null;
}

const InfoItem: React.FC<InfoItemProps> = ({ icon, label, value }) => (
  <InfoItemContainer>
    {icon}
    <InfoText variant="body1">
      <strong>{label}:</strong> {value || "N/A"}
    </InfoText>
  </InfoItemContainer>
);

export default InfoItem;
