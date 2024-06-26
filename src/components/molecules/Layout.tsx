import { Container } from "@mui/material";
import Header from "./header/Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <Container component="main" sx={{ mt: 4, mb: 4 }}>
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
