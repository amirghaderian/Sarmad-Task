import { CSSProperties } from "react";

const paperStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: 5,
  height: "50vh",
  width: 280,
  margin: "100px auto",
};
const gridSyle: CSSProperties = {
  display: "flex",
  gap: "5px",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};
const inputAdornmentStyle = {
  "&:hover": {
    cursor: "default",
  },
};
const avatarStyle: CSSProperties = { backgroundColor: "#1bbd7e" };
const gridContainerStyle: CSSProperties = { direction: "rtl" };

const btnstyle: CSSProperties = { margin: "20px 0" };
const textFildeStyle: CSSProperties = {
  marginTop: 2,
};
export {
  paperStyle,
  gridSyle,
  avatarStyle,
  btnstyle,
  inputAdornmentStyle,
  textFildeStyle,
  gridContainerStyle,
};
