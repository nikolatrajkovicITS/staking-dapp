import React from "react";
import { Avatar as MuiAvatar, Box, styled } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Image from "next/image";

const StyledAvatar = styled(MuiAvatar)(() => ({
  width: 78,
  height: 78,
  position: "relative",
  border: "1px solid grey",
  borderRadius: "50%",
  overflow: "unset",
}));

const CheckIconWrapper = styled(Box)(() => ({
  position: "absolute",
  bottom: 0,
  right: -5,
}));

interface AvatarProps {
  src: string;
  alt: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, alt }) => (
  <Box display="flex" justifyContent="center" mt={2}>
    <StyledAvatar alt={alt}>
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        style={{ borderRadius: "50%" }}
      />
      <CheckIconWrapper>
        <CheckCircleIcon color="primary" />
      </CheckIconWrapper>
    </StyledAvatar>
  </Box>
);

export default Avatar;
