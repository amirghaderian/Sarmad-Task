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
import {
  appbarStyle,
  avatarModeStyle,
  avatarStyle,
  iconButtonStyle,
  logoutStyle,
  modeStyle,
  productIconStyle,
  spanStyle,
  toolbarStyle,
  typoAvatarStyle,
  typoProductStyle,
} from "./navbarStyle";
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
    <Box>
      <AppBar position="static" sx={appbarStyle}>
        <Toolbar sx={toolbarStyle}>
          <IconButton
            onClick={handleLogout}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            disableRipple
            sx={iconButtonStyle}
          >
            <Logout sx={logoutStyle} />
          </IconButton>

          <Typography variant="h6" component="div" sx={typoAvatarStyle}>
            <span>ادمين</span>
            <Typography variant="h6" component="div">
              <Avatar sx={avatarStyle}>A</Avatar>
            </Typography>
            <Typography variant="h6" component="div" onClick={handleMode}>
              <Avatar sx={avatarModeStyle}>
                {darkMode ? (
                  <LightMode sx={modeStyle} />
                ) : (
                  <Nightlight sx={modeStyle} />
                )}
              </Avatar>
            </Typography>
          </Typography>
          <Typography sx={typoProductStyle}>
            <span style={spanStyle}>محصولات</span>
            <Product sx={productIconStyle} />
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
