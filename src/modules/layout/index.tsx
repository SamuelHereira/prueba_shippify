import React from "react";
import { Box, Typography } from "@mui/material";
import Menu from "./Menu";
import InfoCard from "./components/InfoCard";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#EBEBEB",
        }}
      >
        <Box
          p={2}
          sx={{
            backgroundColor: "#004E98",
            color: "white",
            height: "100px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography variant="h4">Prueba Shippify - Samuel Hereira</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "2em",
          }}
        >
          <Box
            p={2}
            sx={{
              width: "30vw",
              display: "flex",
              flexDirection: "column",
              gap: "2em",
            }}
          >
            <Menu />
            <InfoCard />
          </Box>
          <Box
            p={2}
            sx={{
              width: "70vw",
              height: "80vh",
              overflow: "auto",
            }}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Layout;
