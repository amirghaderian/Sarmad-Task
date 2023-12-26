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
} from "./navbarStyles";
import { changeTheme } from "../../redux/Store";
import { useDispatch, useSelector } from "react-redux";
import { CustomeDialogs } from "..";
interface ThemState {
  theme: { darkmode: boolean };
}
const Navbar = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state: ThemState) => state.theme.darkmode);
  const handleLogout = () => {
    localStorage.removeItem("token");
    location.reload();
  };
  const handleMode = () => {
    dispatch(changeTheme());
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
                {selector ? (
                  <LightMode sx={modeStyle} />
                ) : (
                  <Nightlight sx={modeStyle} />
                )}
              </Avatar>
            </Typography>
          </Typography>
          <Typography sx={typoProductStyle} variant="button">
            <CustomeDialogs>
              <span style={spanStyle}>سبد من</span>
              <Product sx={productIconStyle} />
            </CustomeDialogs>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
