import React from "react";
import { Avatar as MuiAvatar, Box, styled } from "@mui/material";
import Image from "next/image";
import CheckIcon from "@mui/icons-material/Check";

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
}

const Avatar: React.FC<AvatarProps> = ({ src, alt }) => (
  <Box display="flex" justifyContent="center" mt={2}>
    <StyledAvatar>
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        style={{ borderRadius: "50%" }}
      />
      <CheckIconWrapper>
        <CheckIcon sx={{ color: "white", fontSize: 16 }} />
      </CheckIconWrapper>
    </StyledAvatar>
  </Box>
);

export default Avatar;
