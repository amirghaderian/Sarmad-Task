import { CSSProperties } from "react";

const paperStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: 5,
  height: "65vh",
  width: "65vh",
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
const avatarStyle: CSSProperties = {
  backgroundImage: " linear-gradient(to bottom right, blue, white,red)",
};
const gridContainerStyle: CSSProperties = { direction: "rtl" };

const btnStyle: CSSProperties = { margin: "20px 0" };
const textFildeStyle: CSSProperties = {
  marginTop: 2,
};
const toastContainerStyle: CSSProperties = {
  backgroundColor: "#eaeaea",
  padding: "0",
};
export {
  paperStyle,
  gridSyle,
  avatarStyle,
  btnStyle,
  inputAdornmentStyle,
  textFildeStyle,
  gridContainerStyle,
  toastContainerStyle,
};
