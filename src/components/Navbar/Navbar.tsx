import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
} from "@mui/material";
import {
  Logout,
  ProductionQuantityLimits as Product,
  Nightlight,
  LightMode,
} from "@mui/icons-material";
import { useState } from "react";
const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    location.reload();
  };
  const handleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Box sx={{ flexGrow: 1, borderRadius: "30px" }}>
      <AppBar
        position="static"
        sx={{
          flexGrow: 1,
          borderRadius: 3,
          backgroundColor: "white",
          color: "#11181C",
        }}
      >
        <Toolbar sx={{ gap: 4 }}>
          <IconButton
            onClick={handleLogout}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            disableRipple
            sx={{ mr: 2 }}
          >
            <Logout sx={{ color: "#687076" }} />
          </IconButton>

          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <span>ادمين</span>
            <Typography variant="h6" component="div">
              <Avatar
                sx={{
                  backgroundImage:
                    "linear-gradient(to right, #0072F5 , #985CDD)",
                }}
              >
                A
              </Avatar>
            </Typography>
            <Typography variant="h6" component="div" onClick={handleMode}>
              <Avatar sx={{ bgcolor: "#F0F0F0", mr: 1.5, borderRadius: "30%" }}>
                {darkMode ? (
                  <LightMode  sx={{ color: "#00254D" }} />
                ) : (
                  <Nightlight sx={{ color: "#00254D" }} />
                )}
              </Avatar>
            </Typography>
          </Typography>
          <Typography sx={{ display: "flex", gap: 0.2 }}>
            <span style={{ color: "#11181C" }}>محصولات</span>
            <Product  sx={{color:"#1976D2"}}/>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
