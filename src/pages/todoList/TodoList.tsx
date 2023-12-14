import { Box, Button, TextField } from "@mui/material";
import { Navbar, Todo } from "../../components";
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
                    جستجو
                  </Button>
                ),
              }}
            />
          </div>
        </Box>
      </Box>
      <Todo />
    </>
  );
};

export default TodoList;
