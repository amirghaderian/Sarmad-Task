import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { api } from "../../services/api";
import { TodoCard } from "..";
import { boxContainerStyle, boxItemStyle } from "./todoStyle";
import { toast } from "react-toastify";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [myProductList, setMyProductList] = useState([]);
  const notifySuccess = (proccess: string) => toast.success(proccess);
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(myProductList));
  }, [myProductList]);
  const fetchData = async () => {
    try {
      const res = await api.get("products");
      setTodoList(res.data);
    } catch (err) {
      console.error(err.message);
    }
  };
  const handleAddProduct = (product) => {
    notifySuccess("با موفقیت به سبدتان افزوده شد");
    const filter = JSON.parse(localStorage.getItem("filterData"));
    if (filter) {
      setMyProductList(filter);
      localStorage.removeItem("filterData");
    }
    setMyProductList((pre) => [...pre, product]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box sx={boxContainerStyle}>
      <Box sx={boxItemStyle}>
        {todoList.map((todo) => (
          <TodoCard
            onAddProduct={handleAddProduct}
            myProductList={myProductList}
            setMyProductList={setMyProductList}
            todo={todo}
            key={todo.id}
          />
        ))}
      </Box>
    </Box>
  );
};
export default Todo;
