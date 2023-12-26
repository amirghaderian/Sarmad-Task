import { CSSProperties } from "react";

const appbarStyle = {
  flexGrow: 1,
  borderRadius: 3,
  backgroundColor: "white",
  color: "#11181C",
};
const toolbarStyle = {
  gap: 4,
};
const typoAvatarStyle = {
  flexGrow: 1,
  display: "flex",
  alignItems: "center",
  gap: 1,
};
const typoProductStyle: CSSProperties = {
  display: "flex",
  gap: 0.2,
  cursor: "pointer",
  alignItems: "center",
};
const iconButtonStyle = {
  mr: 2,
};
const logoutStyle = { color: "#687076" };
const avatarModeStyle = { bgcolor: "#F0F0F0", mr: 1.5, borderRadius: "30%" };
const modeStyle = { color: "#00254D", cursor: "pointer" };
const avatarStyle = {
  backgroundImage: "linear-gradient(to right, #0072F5 , #985CDD)",
};
const spanStyle = {
  color: "#11181C",
  fontSize: "21px",
};
const productIconStyle = { color: "#1976D2", cursor: "pointer" };
export {
  appbarStyle,
  toolbarStyle,
  logoutStyle,
  typoAvatarStyle,
  typoProductStyle,
  modeStyle,
  avatarModeStyle,
  iconButtonStyle,
  avatarStyle,
  spanStyle,
  productIconStyle,
};
