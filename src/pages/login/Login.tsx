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
const Login = () => {
  const [secure, setSecure] = useState(true);
  const paperStyle = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    padding: 5,
    height: "50vh",
    width: 280,
    margin: "100px auto",
  };
  const gridSyle = {
    display: "flex",
    gap: "5px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const handleEye = () => {
    setSecure(!secure);
  };
  const handleSubmit = () => {
    console.log("object");
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "20px 0" };
  return (
    <Grid>
      <Paper elevation={15} sx={paperStyle}>
        <Grid item justifyContent="center" sx={gridSyle}>
          <Avatar style={avatarStyle}></Avatar>
          <h2>ورود به سیستم</h2>
        </Grid>
        <div style={{ direction: "rtl" }}>
          {" "}
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
                  sx={{
                    "&:hover": {
                      cursor: "default",
                    },
                  }}
                  onClick={handleEye}
                  position="end"
                >
                  {secure ? <Visibility /> : <VisibilityOff />}
                </InputAdornment>
              ),
            }}
            sx={{
              mt: 2,
            }}
            label="رمزعبور"
            placeholder="رمز عبور خود را وارد کنید"
            type={secure ? "password" : "text"}
            variant="outlined"
            fullWidth
            required
          />
        </div>

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
