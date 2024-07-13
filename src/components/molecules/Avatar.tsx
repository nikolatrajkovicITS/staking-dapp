import React from "react";
import {
  Avatar as MuiAvatar,
  Box,
  styled,
  SxProps,
  Theme,
} from "@mui/material";
import Image from "next/image";

const StyledAvatar = styled(MuiAvatar)(({ theme }) => ({
  width: 78,
  height: 78,
  position: "relative",
  border: `1px solid ${theme.palette.primary.dark}`,
  borderRadius: "50%",
  overflow: "unset",
}));

const CheckIconWrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 5,
  right: -5,
  border: `1px solid ${theme.palette.common.white}`,
  backgroundColor: theme.palette.primary.main,
  borderRadius: "50%",
  width: 20,
  height: 20,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

interface AvatarProps {
  src: string;
  alt: string;
  icon?: React.ReactNode;
  containerSx?: SxProps<Theme>;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, icon, containerSx }) => (
  <Box display="flex" justifyContent="center">
    <StyledAvatar sx={containerSx}>
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        style={{ borderRadius: "50%" }}
      />
      {icon && <CheckIconWrapper>{icon}</CheckIconWrapper>}
    </StyledAvatar>
  </Box>
);

export default Avatar;
