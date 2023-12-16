import { Box, Button, TextField } from "@mui/material";
import { Navbar, Todo } from "../../components";
import { boxStyle, boxXontainerStyle, btnStyle, divStyle } from "./listTodo";
import { useState } from "react";
const TodoList = () => {
  const [todoList, setTodoList] = useState([1, 2, 3]);
  const [products, setProducts] = useState([]);
  const handleAddTodo = (todo) => {
    setTodoList((prevTodoList) => [...prevTodoList, todo]);
  };
  const handleAddProduct = (newProducts) => {
    setProducts((prevState) => [...prevState, newProducts]);
    localStorage.setItem("products",JSON.stringify(products))
  };

  return (
    <>
      <Navbar
        TodoList={todoList}
        setTodoList={setTodoList}
        onAddProduct={handleAddProduct}
        products={products}
        setProducts={setProducts}
      />
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
      <Todo onAddTodo={handleAddTodo} onAddProduct={handleAddProduct} />
    </>
  );
};

export default TodoList;
