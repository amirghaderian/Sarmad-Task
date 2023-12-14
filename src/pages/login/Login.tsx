import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import {
  paperStyle,
  gridSyle,
  avatarStyle,
  btnstyle,
  inputAdornmentStyle,
  textFildeStyle,
  gridContainerStyle,
} from "./loginStyle";
const Login = () => {
  const [secure, setSecure] = useState(true);
  const handleEye = () => {
    setSecure(!secure);
  };
  const handleSubmit = () => {
    console.log("object");
  };
  return (
    <Grid>
      <Paper elevation={15} sx={paperStyle}>
        <Grid item justifyContent="center" sx={gridSyle}>
          <Avatar style={avatarStyle}></Avatar>
          <h2>ورود به سیستم</h2>
        </Grid>
        <Grid container style={gridContainerStyle}>
          <TextField
            label="نام کاربری"
            placeholder="نام کاربری خود را وارد کنید"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            InputProps={{
              endAdornment: (
                <InputAdornment
                  sx={inputAdornmentStyle}
                  onClick={handleEye}
                  position="end"
                >
                  {secure ? <Visibility /> : <VisibilityOff />}
                </InputAdornment>
              ),
            }}
            sx={textFildeStyle}
            label="رمزعبور"
            placeholder="رمز عبور خود را وارد کنید"
            type={secure ? "password" : "text"}
            variant="outlined"
            fullWidth
            required
          />
        </Grid>

        <Button
          onClick={handleSubmit}
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
        >
          ورود
        </Button>
      </Paper>
    </Grid>
  );
};

export default Login;
