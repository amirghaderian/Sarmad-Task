import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { api } from "../../services/api";
import { TodoCard } from "..";
import { boxContainerStyle, boxItemStyle } from "./todoStyle";
import { toast } from "react-toastify";
import TodoParams from "./todo.type";
const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [myProductList, setMyProductList] = useState(
    localStorage.getItem("products") == null
      ? []
      : JSON.parse(localStorage.getItem("products")!)
  );
  const notifySuccess = (proccess: string) => toast.success(proccess);
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(myProductList));
  }, [myProductList]);
  const fetchData = async () => {
    try {
      const res = await api.get("products");
      setTodoList(res.data);
    } catch (err: any) {
      console.error(err.message);
    }
  };
  const handleAddProduct = (product: TodoParams) => {
    notifySuccess("با موفقیت به سبدتان افزوده شد");
    const filterData = localStorage.getItem("products");
    const filter = filterData ? JSON.parse(filterData) : [];
    if (filterData) {
      setMyProductList(filter);
      localStorage.removeItem("products");
    }
    setMyProductList((pre: any) => [...pre, product]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box sx={boxContainerStyle}>
      <Box sx={boxItemStyle}>
        {todoList.map((todo: TodoParams) => (
          <TodoCard onAddProduct={handleAddProduct} todo={todo} key={todo.id} />
        ))}
      </Box>
    </Box>
  );
};
export default Todo;
