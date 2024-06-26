import { Box, Typography, Link } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{ py: 3, px: 2, mt: "auto", textAlign: "center" }}
    >
      <Typography variant="body1">Staking DApp © 2024</Typography>
      <Link href="https://example.com">Privacy Policy</Link>
    </Box>
  );
};

export default Footer;
