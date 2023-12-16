import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import {
  paperStyle,
  gridSyle,
  avatarStyle,
  btnStyle,
  inputAdornmentStyle,
  textFildeStyle,
  gridContainerStyle,
  toastContainerStyle,
} from "./loginStyle";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { ToastContainer, toast } from "react-toastify";
import { ChangeEvent, useState } from "react";

const Login = () => {
  const [secure, setSecure] = useState(true);
  const [user, setUser] = useState({ userName: "", password: "" });
  const notifyError = (proccess: string) => toast.error(proccess);
  const notifySuccess = (proccess: string) => toast.success(proccess);

  const handleEye = () => {
    setSecure(!secure);
  };
  const handleTextFieldUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ userName: e.target.value, password: user.password });
  };
  const handleTextFieldPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ userName: user.userName, password: e.target.value });
  };
  const handleSubmit = () => {
    if (user.userName.trim() == "admin" && user.password.trim() == "123") {
      notifySuccess("ورود با موفقيت");
      localStorage.setItem("token", JSON.stringify(user));
      setTimeout(() => {
        location.reload();
      }, 2000);
    } else {
      setUser({ userName: "", password: "" });
      notifyError("نام کاربری یا رمز عبور درست نمی باشد.");
    }
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
            onChange={handleTextFieldUserName}
            value={user.userName}
            label="نام کاربری"
            placeholder="نام کاربری خود را وارد کنید"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            onChange={handleTextFieldPassword}
            value={user.password}
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
            aria-errormessage="رمز عبور الزامي است"
            required
          />
        </Grid>

        <Button
          onClick={handleSubmit}
          type="submit"
          color="primary"
          variant="contained"
          style={btnStyle}
          fullWidth
        >
          ورود
        </Button>
      </Paper>
      <ToastContainer
        style={toastContainerStyle}
        position="bottom-right"
        autoClose={3000}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Grid>
  );
};

export default Login;
