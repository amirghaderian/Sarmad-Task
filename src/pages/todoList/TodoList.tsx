import { Box, Button, TextField } from "@mui/material";
import { Navbar } from "../../components";
import { boxStyle, boxXontainerStyle, btnStyle, divStyle } from "./listTodo";
const TodoList = () => {
  return (
    <>
      <Navbar />
      <Box sx={boxXontainerStyle}>
        <Box sx={boxStyle}>
          <div style={divStyle}>
            <TextField
              fullWidth
              label="نام محصول"
              id="fullWidth"
              InputProps={{
                endAdornment: (
                  <Button
                    variant="contained"
                    disableRipple
                    disableElevation
                    sx={btnStyle}
                  >
                    افزودن
                  </Button>
                ),
              }}
            />
          </div>
        </Box>
      </Box>
    </>
  );
};

export default TodoList;
