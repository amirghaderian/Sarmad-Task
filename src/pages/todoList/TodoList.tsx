import { Box, Button, TextField } from "@mui/material";
import { Navbar } from "../../components";
const TodoList = () => {
  return (
    <div>
      <Navbar />
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "12px" }}
      >
        <h3>ToDoList</h3>
      </div>
      <Box sx={{ display: "flex", justifyContent: "center", direction: "rtl" }}>
        <Box
          sx={{
            width: 500,
            maxWidth: "100%",
          }}
        >
          <div dir="rtl" style={{ display: "flex" }}>
            <TextField
              sx={{ pr: 0, pl: 0, mr: 0, ml: 0 }}
              fullWidth
              label="نام محصول"
              id="fullWidth"
              InputProps={{
                endAdornment: (
                  <Button
                    variant="contained"
                    disableRipple
                    disableElevation
                    sx={{ mr: -1.7, py: 2 }}
                  >
                    افزودن
                  </Button>
                ),
              }}
            />
          </div>
        </Box>
      </Box>
    </div>
  );
};

export default TodoList;
